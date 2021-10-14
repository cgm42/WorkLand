import { Pool } from "pg";

require("dotenv").config();

const pool = new Pool({
  max: 20,
  connectionString: process.env.DATABASE_URL,
  idleTimeoutMillis: 30000,
});

export default pool;
