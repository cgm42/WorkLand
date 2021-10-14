import pool from "../dbConfig/dbConfig";

function getAllProjects() {
  return pool.query("SELECT * from project");
}

export { getAllProjects };
