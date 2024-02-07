-- Comments in SQL Start with dash-dash --

-- Add to table a chair, price of 44.00, not returnable
INSERT INTO products (name, price, can_be_returned) VALUES ('chair', 44.00, false); 

-- Add to table a stool, price of 25.99, returnable
INSERT INTO products (name, price, can_be_returned) VALUES ('stool', 25.99, true);

-- Add to table a tale, price of 124.00, not returnable
INSERT INTO products (name, price, can_be_returned) VALUES ('table', 124.00, false);

-- Display all rows and columns of table
SELECT * FROM products;

-- Display all the names of the products
SELECT name FROM products;

-- Display all the names and prices of the products
SELECT name, price FROM products;

-- Add a new product of my choosing
INSERT INTO products (name, price, can_be_returned) VALUES ('lava lamp', 20, false);

-- Display only products that can be returned
SELECT * FROM products WHERE can_be_returned = true;

-- Display only products with price less than 44
SELECT * FROM products WHERE price < 44;

-- Display products between price of 22.50 and 99.99
SELECT * FROM products WHERE price > 22.50 AND price < 99.99;

-- $20 off all products
UPDATE products SET price = price-20;

-- Everything under $25 sold out
DELETE FROM products WHERE price < 25;

-- Remaining products increased back up by $20
UPDATE products SET price = price + 20;

--Everything can be returned 
UPDATE products SET can_be_returned = true;

