import { Request, Response } from "express";
export let index = (req: Request, res: Response) => {
  res.redirect("/login");
};

export let home = (req: Request, res: Response) => {
  res.render("index/index", {
    title: "Home"
  });
};