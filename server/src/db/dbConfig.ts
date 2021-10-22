import { Pool } from "pg";

require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // FOR USE WITH HEROKU
  // max: 6,
  // connectionString: process.env.DATABASE_URL,
});
export default pool;
