-- Comments in SQL Start with dash-dash --

-- Find app with id of 1880
SELECT * FROM analytics WHERE id = 1880;

-- List all ids and names of apps that were last update on August 1st, 2018
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';

-- List all categories and their count
SELECT category, COUNT(*) FROM analytics GROUP BY category;

--Find the top 5 most-reviewed apps and the number of reviews for each.
SELECT id, app_name, reviews FROM analytics ORDER BY reviews DESC LIMIT 5;

-- Find the app that has the most reviews with a rating greater than equal to 4.8.
SELECT id, app_name, reviews, rating FROM analytics WHERE rating >= 4.8 ORDER BY reviews DESC LIMIT 1;

-- Find the average rating for each category ordered by the highest rated to lowest rated.
SELECT category, AVG(rating) FROM analytics GROUP BY category ORDER BY AVG(rating) DESC;

-- Find the name, price, and rating of the most expensive app with a rating that’s less than 3.
SELECT id, app_name, price, rating FROM analytics WHERE rating < 3 ORDER BY price DESC LIMIT 1;

-- Find all apps with a min install not exceeding 50, that have a rating. Order your results by highest rated first.
SELECT id, app_name, min_installs, rating FROM analytics WHERE min_installs <= 50 AND rating >= 1 ORDER BY rating DESC;

-- Find the names of all apps that are rated less than 3 with at least 10000 reviews.
SELECT id, app_name, rating, reviews FROM analytics WHERE rating < 3 AND reviews >= 10000;

-- Find the top 10 most-reviewed apps that cost between 10 cents and a dollar.
SELECT id, app_name, reviews, price FROM analytics WHERE price > 0.10 AND price < 1.00 ORDER BY reviews DESC LIMIT 10;

-- Find the most out of date app. 
SELECT id, app_name, last_updated FROM analytics Where last_updated = (SELECT MIN(last_updated) FROM analytics);

-- Count all the reviews in the Google Play Store.
SELECT COUNT(reviews) AS review_count FROM analytics;

-- Find all the categories that have more than 300 apps in them.
SELECT category, COUNT(*) FROM analytics GROUP BY category HAVING COUNT(*) > 300;

-- Find the app that has the highest proportion of min_installs to reviews, among apps that have been installed at least 100,000 times. Display the name of the app along with the number of reviews, the min_installs, and the proportion.
SELECT id, app_name, reviews, min_installs, (min_installs/reviews) AS installs_per_review FROM analytics WHERE min_installs >= 100000 ORDER BY installs_per_re
view DESC LIMIT 1;

