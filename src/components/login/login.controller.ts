import { Request, Response } from "express";
export let index = (req: Request, res: Response) => {
  res.render("login/index", {
    title: "Login"
  });
};

export let login = (req: Request, res: Response) => {
  console.log(req.body.username);
  return res.redirect("/");
};
