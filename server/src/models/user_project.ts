import pool from "../db/dbConfig";

function getAllUsersAndProjects() {
  return pool
    .query(`
      SELECT *
      FROM users_projects;  
    `);
};

function addUserToProject(userProject: {user_id: number; project_id: number; role: string;}) {
  const values = [userProject.user_id, userProject.project_id, userProject.role]

  return pool
    .query(`
      INSERT INTO users_projects (user_id, project_id, role)
      VALUES ($1, $2, $3);
    `, values);
};

function deleteUserFromProject(userProject: {user_id: number; project_id: number;}) {
  const values = [userProject.user_id, userProject.project_id]
  
  return pool
    .query(`
      DELETE FROM users_projects
      WHERE user_id = $1 AND project_id = $2;
    `, values)
};

export {addUserToProject, deleteUserFromProject, getAllUsersAndProjects};