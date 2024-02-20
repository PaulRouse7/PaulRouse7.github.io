"""Blogly application."""
from flask import Flask, request, render_template,  redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User

app = Flask(__name__)
app.static_folder = 'static'

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_users_db'
app.config['SQLALCHEMY_ECHO'] = True

app.app_context().push()   #FIXED RUNTIME ERROR --- IMPORTANT!!
connect_db(app)

app.config['SECRET_KEY'] = "chickenzarecool21837"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

@app.route('/')
def lists_users():
    """Shows list of all users"""

    users = User.query.all()

    return render_template('users.html', users=users)

@app.route('/add_user')
def display_add_user():
    """Shows form to add new user"""

    return render_template('add_user.html')

@app.route('/add_user', methods=["POST"])
def add_user_request():
    """Handle POST request for adding new user info"""
    first_name = request.form["first-name"]
    last_name = request.form["last-name"]
    image_url = request.form["image"]

    new_user = User(first_name=first_name, last_name=last_name, image_url=image_url)
    db.session.add(new_user)
    db.session.commit()

    return redirect("/")

@app.route('/<int:user_id>')
def show_user(user_id):
    """Show details page about a single user"""

    user = User.query.get_or_404(user_id)
    return render_template("user_details.html", user=user)

@app.route('/<int:user_id>', methods=['POST'])
def delete_user(user_id):
    """Delete a user"""

    user = User.query.get(user_id)

    db.session.delete(user)
    db.session.commit()

    return redirect('/')

@app.route('/<int:user_id>/edit_user')
def edit_user_page(user_id):
    """"Show edit details about a user page"""

    user = User.query.get_or_404(user_id)
    return render_template("edit_user.html", user=user)

@app.route('/<int:user_id>/edit_user', methods=["POST"])
def send_edit_user_info(user_id):
    """Handle POST request for edit user info"""

    first_name = request.form["first-name"]
    last_name = request.form["last-name"]
    image_url = request.form["image"]

    user = User.query.get(user_id)

    if first_name:
        user.first_name = first_name

    if last_name:
        user.last_name = last_name

    if image_url:
        user.image_url = image_url

    db.session.add(user)
    db.session.commit()

    return redirect("/")    
           