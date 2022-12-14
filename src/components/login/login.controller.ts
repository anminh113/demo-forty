import { Request, Response } from "express";
import queryDB from "../../util/database";
import User from "../../models/users";
import bcrypt from "bcryptjs";

export let index = (req: Request, res: Response) => {
  res.render("login/index", {
    title: "Login",
    error: undefined
  });
};

export let login = async (req: Request, res: Response) => {
  try {
    const response = await queryDB(
      "SELECT * from users where username = $1 limit 1;",
      [req.body.username]
    );
    if (
      response.rows.length > 0 &&
      bcrypt.compareSync(req.body.password, response.rows[0].password)
    ) {
      req.session.user = response.rows[0];
      return res.redirect("/check-status");
    } else {
      res.render("login/index", {
        title: "Login",
        error: "Username or Password incorrect!",
      });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
