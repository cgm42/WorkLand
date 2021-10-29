import pool from "../db/dbConfig";

function getAllTasksForProject(project_id: number) {
  return pool.query(
    `
      SELECT tasks.*
      FROM tasks
      JOIN projects
      ON tasks.project_id = $1
      GROUP BY tasks.id
      ORDER BY tasks.id DESC;
    `,
    [project_id]
  );
}

function createTask(task: {
  project_id: number;
  sprint_id: any;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  priority_level: number;
}) {
  const {
    project_id,
    sprint_id,
    name,
    description,
    start_date,
    end_date,
    priority_level,
  } = task;

  const values = [
    project_id,
    sprint_id,
    name,
    description,
    start_date,
    end_date,
    priority_level,
  ];

  return pool.query(
    `
    INSERT INTO tasks (project_id, sprint_id, name, description, start_date, end_date, priority_level)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id;
  `,
    values
  );
}

function editTask(task: {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
}) {
  const { id, name, description, start_date, end_date } = task;

  const values = [name, description, start_date, end_date, id];

  return pool.query(
    `
      UPDATE tasks
      SET name = $1,
          description = $2,
          start_date = $3,
          end_date = $4
      WHERE tasks.id = $5
      RETURNING *;
    `,
    values
  );
}

function updateTaskStatus(status: number, id: number) {
  return pool.query(
    `
      UPDATE tasks
      SET current_status = $1
      WHERE tasks.id = $2
      RETURNING *;
    `,
    [status, id]
  );
}

function updateTaskPriority(priority: number, id: number) {
  return pool.query(
    `
      UPDATE tasks
      SET priority_level = $1
      WHERE tasks.id = $2
      RETURNING *;
    `,
    [priority, id]
  );
}

function deleteTask(task_id: number) {
  return pool.query(
    `
      DELETE FROM tasks
      WHERE tasks.id = $1;
    `,
    [task_id]
  );
}

export {
  getAllTasksForProject,
  createTask,
  editTask,
  updateTaskStatus,
  updateTaskPriority,
  deleteTask,
};
