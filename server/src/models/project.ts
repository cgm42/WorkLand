import pool from "../db/dbConfig";

function getAllProjects(user_id: number) {
  return pool
    .query(`
      SELECT projects.* 
      FROM projects
      JOIN users_projects ON projects.id = users_projects.project.id
      JOIN users ON users_projects.user_id = users.id
      WHERE user_id = $1;
    `, [user_id]);
}

// function getProjectByID

export { getAllProjects };
