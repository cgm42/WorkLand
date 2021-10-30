DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS oauth_mapping CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS users_projects CASCADE;
DROP TABLE IF EXISTS sprints CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS users_tasks CASCADE;
DROP TABLE IF EXISTS meetings CASCADE;
DROP TABLE IF EXISTS users_meetings CASCADE;
DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar VARCHAR(255),
  total_experience INT DEFAULT 0
);

CREATE TABLE oauth_mapping (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  -- person_id INT NOT NULL,
  oauth_provider TEXT NOT NULL,
  oauth_id INT NOT NULL
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  creator_id INT REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  background_img VARCHAR(255) NOT NULL,
  current_status TEXT DEFAULT 'Incomplete'
);

CREATE TABLE users_projects (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  project_id INT REFERENCES projects(id) ON DELETE CASCADE,
  role VARCHAR(255),
  UNIQUE (user_id, project_id)
);

CREATE TABLE sprints (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INT REFERENCES projects(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  current_status TEXT DEFAULT 'Incomplete'
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INT REFERENCES projects(id) ON DELETE CASCADE,
  sprint_id INT REFERENCES sprints(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  priority_level INT NOT NULL,
  current_status INT DEFAULT 0
);

CREATE TABLE users_tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
  UNIQUE (user_id, task_id)
);

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
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  meeting_id INT REFERENCES meetings(id) ON DELETE CASCADE,
  UNIQUE (user_id, meeting_id)
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  message TEXT NOT NULL,
  sender_id INT REFERENCES users(id),
  receiver_id INT REFERENCES users(id)
);

