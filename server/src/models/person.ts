import pool from "../dbConfig/dbConfig";

import { Person } from "../../../types";

function getPerson(id: number) {
  return pool.query("SELECT * FROM person WHERE person_id = $1", [id]);
}

function getPersonByGitHub(githubId: number) {
  return pool.query(
    `SELECT pers.person_id, pers.name, oauth.oauth_id
                     FROM person pers
                     JOIN oauth_mapping oauth on oauth.person_id = pers.person_id 
                     WHERE oauth.oauth_id = $1`,
    [githubId]
  );
}

async function createPersonByGitHub(githubId: number) {
  const client = await pool.connect();

  try {
    const insertPersonText =
      "INSERT INTO person(name) VALUES('TEST') RETURNING person_id";
    const insertedPersonId = (await client.query(insertPersonText)).rows[0]
      .person_id;

    const insertText = `INSERT INTO oauth_mapping(person_id, oauth_provider, oauth_id) 
                        VALUES($1, $2, $3)`;
    const insertValues = [insertedPersonId, "GitHub", githubId];
    await client.query(insertText, insertValues);
  } catch (e) {
    throw e;
  }
}

export { getPerson, getPersonByGitHub, createPersonByGitHub };
