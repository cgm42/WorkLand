import pool from "../db/dbConfig";

function addUserToTask(userTask: {user_id: number, task_id: number}) {
  const values = [userTask.user_id, userTask.task_id];

  return pool
    .query(`
      INSERT INTO users_tasks (user_id, task_id)
      VALUES ($1, $2);
    `, values);
};

function deleteUserFromTask(userTask: {user_id: number, task_id: number}) {
  const values = [userTask.user_id, userTask.task_id]
  
  return pool
    .query(`
      DELETE FROM users_tasks
      WHERE user_id = $1 AND task_id = $2;
    `, values);
};

export {addUserToTask, deleteUserFromTask};