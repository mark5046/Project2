DROP DATABASE IF EXISTS instacode;
CREATE DATABASE instacode;

USE instacode;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    profile_pic VARCHAR(120),
    github_link VARCHAR(120),
    bio TEXT NULL,
    PRIMARY KEY (id)
    );

CREATE TABLE post (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(120) NOT NULL,
    description TEXT NULL,
    category VARCHAR(30) NOT NULL,
    comments TEXT NULL,
    likes INT NULL,
    PRIMARY KEY (id)
);
    