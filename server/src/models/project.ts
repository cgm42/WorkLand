import pool from "../db/dbConfig";

function getAllProjects(user_id: number) {
  return pool.query(
    `
      SELECT projects.* 
      FROM projects
      JOIN users_projects ON projects.id = users_projects.project_id
      JOIN users ON users_projects.user_id = users.id
      WHERE user_id = $1
      GROUP BY projects.id;
    `,
    [user_id]
  );
}

function getProjectByID(project_id: number) {
  return pool.query(
    `
      SELECT * 
      FROM projects
      WHERE projects.id = $1;
    `,
    [project_id]
  );
}

function addProject(project: {
  creator_id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  background_img: string;
}) {
  const {
    creator_id,
    name,
    description,
    start_date,
    end_date,
    background_img,
  } = project;

  const values = [
    creator_id,
    name,
    description,
    start_date,
    end_date,
    background_img,
  ];

  return pool.query(
    `
      INSERT INTO projects (creator_id, name, description, start_date, end_date, background_img)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `,
    values
  );
}

function editProject(project: {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
}) {
  const { id, name, description, start_date, end_date } = project;

  const values = [name, description, start_date, end_date, id];

  return pool.query(
    `
      UPDATE projects
      SET name = $1,
          description = $2,
          start_date = $3,
          end_date = $4
      WHERE projects.id = $5
      RETURNING *;
    `,
    values
  );
}

function deleteProject(project_id: number) {
  return pool.query(
    `
  DELETE FROM projects
  WHERE projects.id = $1
  `,
    [project_id]
  );
}

export {
  getAllProjects,
  getProjectByID,
  addProject,
  editProject,
  deleteProject,
};
