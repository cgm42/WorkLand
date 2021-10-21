DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS oauth_mapping;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS tasks;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  total_experience INT DEFAULT 0
);

CREATE TABLE oauth_mapping (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) NOT NULL ON DELETE CASCADE,
  oauth_provider TEXT NOT NULL,
  oauth_id INT NOT NULL
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  creator_id REFERENCES users(id) NOT NULL
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  background_img VARCHAR(255) NOT NULL,
  status TEXT NOT NULL DEFAULT "Incomplete"
);

CREATE TABLE tasks {
  id SERIAL PRIMARY KEY NOT NULL,
  creator_id REFERENCES users(id) NOT NULL
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  background_img VARCHAR(255) NOT NULL,
  status TEXT NOT NULL DEFAULT "Incomplete"
}