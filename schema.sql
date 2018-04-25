DROP DATABASE IF EXISTS instacode;
CREATE DATABASE instacode;

USE instacode;

CREATE TABLE profile (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    category VARCHAR(30) NOT NULL,
    comments TEXT NULL,
    likes INT NULL,
    PRIMARY KEY (id)
    );
    