import pool from "../db/dbConfig";

function getDirectMessages(receiver_id:number) {
  return pool
    .query(`
      SELECT *
      FROM messages
      WHERE receiver_id = $1
      ORDER BY id DESC;
    `, [receiver_id])
}

function getGlobalMessages() {
  return pool
    .query(`
      SELECT *
      FROM messages
      WHERE receiver_id IS NULL
      ORDER BY id DESC;
    `);
};

export {getDirectMessages, getGlobalMessages};