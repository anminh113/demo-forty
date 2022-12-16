import "dotenv/config";
import { Pool, QueryConfig } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on("connect", () => {
  console.log("Database successfully connected!");
});

const queryDB = (text: string | QueryConfig<any>, params?: any) => pool.query(text, params);
export default queryDB;