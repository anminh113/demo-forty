import { Request, Response } from "express";
import queryDB from "../../util/database";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

export let index = (req: Request, res: Response) => {
  res.render("signup/index", {
    title: "Signup",
    error: undefined
  });
};

export let signup = async (req: Request, res: Response) => {
  try {
    const response = await queryDB("SELECT * from users where username = $1 limit 1;", [req.body.username]);
    if (response.rows.length > 0) {
      res.render("signup/index", {
        title: "Signup",
        error: "Username already exists!"
      });
    } else {
      const hash = bcrypt.hashSync(req.body.password, salt);
      await queryDB("INSERT INTO users(username, password) VALUES ($1, $2);", [req.body.username, hash]);
      res.redirect("/login");
    }
  } catch (error) {
    throw error;
  }
};
