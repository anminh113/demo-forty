import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import path from "path";
import passport from "passport";
import session from "express-session";
import "dotenv/config";
const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);
app.use(session({
  name: "tiger-app",
  secret: "secret_key_tiger",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000 * 10
  },
  rolling: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./components/home/route"));
app.use("/login", require("./components/login/route"));
app.use("/signup", require("./components/signup/route"));
app.use("/check-status", require("./components/check-status/route"));

export default app;