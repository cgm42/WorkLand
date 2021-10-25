import pool from "../db/dbConfig";

export function getAllUsers() {
  return pool
    .query(`
      SELECT *
      FROM users;
    `)
}