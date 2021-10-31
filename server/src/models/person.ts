import pool from '../db/dbConfig';
const https = require('https');
require('dotenv').config();

const taskIds = [1, 2, 3, 4, 5, 6];

function getPerson(id: number) {
  return pool.query('SELECT * FROM users WHERE id = $1', [id]);
}

function getPersonByGitHub(githubId: number) {
  return pool.query(
    `SELECT users.id, users.name, users.avatar, oauth_mapping.oauth_id
      FROM users
      JOIN oauth_mapping on oauth_mapping.user_id = users.id
      WHERE oauth_mapping.oauth_id = $1`,
    [githubId]
  );
}

const saveLoc = async (githubId: number, location: string) => {
  const lat = location.split(',')[0];
  console.log('lat :>> ', lat);
  const lng = location.substr(location.indexOf(',') + 1);
  console.log('lng :>> ', lng);
  return pool.query(
    `UPDATE users SET lat=${lat}, lng=${lng}  WHERE id=(SELECT user_id from oauth_mapping where oauth_id=${githubId})`
  );
};

async function createPersonByGitHub(
  githubId: number,
  name: string,
  avatar: string
) {
  const client = await pool.connect();

  try {
    const insertPersonText = `INSERT INTO users(name, avatar) VALUES($1, '${avatar}') RETURNING users.id`;
    const insertedUserId = (await client.query(insertPersonText, [name]))
      .rows[0].id;

    const insertText = `
      INSERT INTO oauth_mapping(user_id, oauth_provider, oauth_id) 
      VALUES($1, $2, $3);
      `;
    const insertValues = [insertedUserId, 'GitHub', githubId];
    console.log('insertValues :>> ', insertValues);
    await client.query(insertText, insertValues);
    await client.query(
      `
      INSERT INTO users_projects (user_id, project_id)
      VALUES ($1, 1);
    `,
      [insertedUserId]
    );
    for (const taskId of taskIds) {
      await client.query(
        `
      INSERT INTO users_tasks (user_id, task_id)
      VALUES ($1, $2);
      `,
        [insertedUserId, taskId]
      );
    }
  } catch (e) {
    throw e;
  }
}

export { getPerson, getPersonByGitHub, createPersonByGitHub, saveLoc };
