from unittest import TestCase

from app import app
from models import db, User


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///flask_blogly_test'
app.config['SQLALCHEMY_ECHO'] = False

app.config['TESTING'] = True

app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

db.drop_all()
db.create_all()


class UserViewsTestCase(TestCase):
    """Tests for views for Users."""

    def setUp(self):
        """Add sample users."""

        User.query.delete()

        user = User(first_name="TestFirst", last_name="TestLast", image_url='profile-icon.jpg')
        db.session.add(user)
        db.session.commit()

        self.user_id = user.id
        self.user = user

    def tearDown(self):
        """Clean up any fouled transaction."""

        db.session.rollback()

    def test_list_users(self):
        """Test if expected users appearing in landing page"""
        with app.test_client() as client:
            resp = client.get("/")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('TestFirst', html)

    def test_user_details(self):
        """Test for user details page expected results"""
        with app.test_client() as client:
            resp = client.get(f"/{self.user_id}")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn(f'<h1>Details of: TestFirst TestLast</h1>', html)            

    def test_add_user(self):
        """Test for added user appearing on landing page"""
        with app.test_client() as client:
            d = {"first-name": "TestFirst2", "last-name": "TestLast2", "image":"/static/profile-icon.jpg"}
            resp = client.post("/add_user", data=d, follow_redirects=True)
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn("TestFirst2 TestLast2", html)

    def test_delete_user(self):
        """Test for deleted user NOT appearing on landing page"""
        with app.test_client() as client:
            
            resp = client.post('/user_id', follow_redirects=True)
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertNotIn("TestFirst TestLast", html)



