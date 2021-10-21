DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS oauth_mapping;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS users_projects;
DROP TABLE IF EXISTS sprints;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS users_tasks;
DROP TABLE IF EXISTS meetings;
DROP TABLE IF EXISTS users_meetings;
DROP TABLE IF EXISTS messages;

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

CREATE TABLE users_projects (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id REFERENCES users(id) NOT NULL ON DELETE CASCADE,
  project_id REFERENCES projects(id) NOT NULL ON DELETE CASCADE,
  UNIQUE (user_id, project_id)
);

CREATE TABLE sprints (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id REFERENCES projects(id) NOT NULL ON DELETE CASCADE
   name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status TEXT NOT NULL DEFAULT "Incomplete"
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id REFERENCES projects(id) NOT NULL ON DELETE CASCADE
  sprint_id REFERENCES sprints(id) ON DELETE CASCADE
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  priority_level TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT "Incomplete"
);

CREATE TABLE users_tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id REFERENCES users(id) NOT NULL ON DELETE CASCADE,
  task_id REFERENCES tasks(id) NOT NULL ON DELETE CASCADE,
  UNIQUE (user_id, task_id)
)

CREATE TABLE meetings (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL
);

CREATE TABLE users_meetings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id REFERENCES users(id) NOT NULL ON DELETE CASCADE,
  meeting_id REFERENCES meetings(id) NOT NULL ON DELETE CASCADE,
  UNIQUE (user_id, meeting_id)
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id REFERENCES users(id) NOT NULL,
  receiver_id REFERENCES users(id)
);

