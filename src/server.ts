import errorHandler from "errorhandler";
import { Client } from "pg";
import "dotenv/config";
import app from "./app";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL;
const client = new Client({
  connectionString
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
