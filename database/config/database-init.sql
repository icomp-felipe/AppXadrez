CREATE DATABASE chessapp;
CREATE USER 'chess'@'localhost' IDENTIFIED BY 'chessapp';
GRANT ALL PRIVILEGES ON chessapp.* TO 'chess'@'localhost';