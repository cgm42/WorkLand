import pool from "../db/dbConfig";

function getAllUsers() {
  return pool
    .query(`
      SELECT *
      FROM users;
    `);
};

function getUsersByProjectID(project_id: number) {
  return pool
    .query(`
      SELECT users.*
      FROM users
      JOIN users_projects
      ON users.id = users_projects.user_id
      JOIN projects
      ON users_projects.project_id = projects.id
      WHERE projects.id = $1;
    `, [project_id]);
};

export {getAllUsers, getUsersByProjectID};