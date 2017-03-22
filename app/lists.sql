DROP DATABASE IF EXISTS lists;
CREATE DATABASE lists;

\c lists;

CREATE TABLE pups (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  breed VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO lists (name, breed, age, sex)
  VALUES ('Tyler', 'Shih-tzu', 3, 'M');