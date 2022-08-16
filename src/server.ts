import errorHandler from "errorhandler";
import { Client } from "pg";
import "dotenv/config";
import app from "./app";
import bcrypt from "bcryptjs";


const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: parseFloat(process.env.PG_PORT)
});

client.connect();
client.query("SELECT * from users", (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows[0]);
  }
});




app.use(errorHandler());

const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
