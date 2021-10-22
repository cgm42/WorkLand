import pool from "../db/dbConfig";

function getAllProjects() {
  return pool.query("SELECT * from project");
}

export { getAllProjects };
