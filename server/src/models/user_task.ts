import pool from "../db/dbConfig";

function getAllUsersAndTasks() {
  return pool.query(`
      SELECT *
      FROM users_tasks;  
    `);
}

function addUserToTask(userTask: { user_id: number; task_id: number }) {
  const values = [userTask.user_id, userTask.task_id];

  return pool.query(
    `
      INSERT INTO users_tasks (user_id, task_id)
      VALUES ($1, $2);
    `,
    values
  );
}

function deleteUsersFromTask(task_id: number) {
  return pool.query(
    `
      DELETE FROM users_tasks
      WHERE task_id = $1
      RETURNING *;
    `,
    [task_id]
  );
}

export { getAllUsersAndTasks, addUserToTask, deleteUsersFromTask };
