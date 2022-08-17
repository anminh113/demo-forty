import { Request, Response } from "express";
import queryDB from "../util/database";

export let index = async (req: Request, res: Response) => {
  const response = await queryDB("SELECT * from users");
  console.log(response.rows);
  res.render("index/index", {
    title: "Home"
  });
};
