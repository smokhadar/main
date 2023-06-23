DROP DATABASE IF EXISTS catchUp_db;
CREATE DATABASE catchUp_db;
USE catchUp_db;
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(40),
  username VARCHAR(30),
  password VARCHAR(30),
  age INT,
  createdDate VARCHAR(30)

)
