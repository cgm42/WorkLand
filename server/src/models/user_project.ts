import pool from "../db/dbConfig";

function addUserToProject(user_id: number, project_id: number, role: string) {
  const values = [user_id, project_id, role]

  return pool
    .query(`
      INSERT INTO users_projects (user_id, project_id, role)
      VALUES ($1, $2, $3);
    `, values);
};

function deleteUserFromProject(user_id:number, project_id: number) {
  const values = [user_id, project_id]
  
  return pool
    .query(`
      DELETE FROM users_projects
      WHERE user_id = $1 AND project_id = $2;
    `, values)
};

export {addUserToProject, deleteUserFromProject};