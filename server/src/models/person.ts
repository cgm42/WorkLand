import pool from "../db/dbConfig";

// import { Person } from "../../../types";

function getPerson(id: number) {
  return pool.query("SELECT * FROM users WHERE id = $1", [id]);
}

function getPersonByGitHub(githubId: number) {
  return pool.query(
    `SELECT users.id, users.name, oauth_mapping.oauth_id
      FROM users
      JOIN oauth_mapping on oauth_mapping.user_id = users.id
      WHERE oauth_mapping.oauth_id = $1`,
    [githubId]
  );
}

async function createPersonByGitHub(
  githubId: number,
  name: string,
  avatar: string
) {
  const client = await pool.connect();

  try {
    const insertPersonText = //TODO: Update query values
      "INSERT INTO users(name) VALUES('TEST') RETURNING users.id";
    const insertedUserId = (await client.query(insertPersonText))
      .rows[0].id;

    const insertText = `
      INSERT INTO oauth_mapping(user_id, oauth_provider, oauth_id) 
      VALUES($1, $2, $3);
      `;
    const insertValues = [insertedUserId, "GitHub", githubId];
    await client.query(insertText, insertValues);
  } catch (e) {
    throw e;
  }
}

export { getPerson, getPersonByGitHub, createPersonByGitHub };
