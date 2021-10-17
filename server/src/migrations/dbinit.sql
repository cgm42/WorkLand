DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS oauth_mapping;
DROP TABLE IF EXISTS person;

CREATE TABLE person (
    person_id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE oauth_mapping (
    oauth_mapping_id SERIAL PRIMARY KEY,
    person_id INT NOT NULL,
    oauth_provider TEXT NOT NULL,
    oauth_id INT NOT NULL,
    FOREIGN KEY(person_id) REFERENCES person(person_id)
);

CREATE TABLE project (
    project_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    person_id INT not NULL,
    submit_date DATE DEFAULT NOW(),
    FOREIGN KEY(person_id) REFERENCES person(person_id)
);

INSERT INTO person(name)
VALUES ('TEST PERSON 1');

INSERT INTO project(title, description, person_id)
VALUES ('TEST PROJECT', 'Generic Description', 1);