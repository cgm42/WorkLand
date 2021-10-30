import pool from "../db/dbConfig";

function getAllUsersAndProjects() {
  return pool.query(`
      SELECT *
      FROM users_projects;  
    `);
}

function addUserToProject(userProject: {
  user_id: number;
  project_id: number;
  role: string;
}) {
  const values = [
    userProject.user_id,
    userProject.project_id,
    userProject.role,
  ];

  return pool.query(
    `
      INSERT INTO users_projects (user_id, project_id, role)
      VALUES ($1, $2, $3);
    `,
    values
  );
}

function deleteUsersFromProject(project_id: number) {
  return pool.query(
    `
      DELETE FROM users_projects
      WHERE project_id = $1
      RETURNING *;
    `,
    [project_id]
  );
}

export { addUserToProject, deleteUsersFromProject, getAllUsersAndProjects };
