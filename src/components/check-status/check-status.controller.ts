import { Request, Response } from "express";
import request from "request";

import constant from "../../util/constant";
export let index = (req: Request, res: Response) => {
  res.render("check-status/index", {
    title: "Check status",
    error: undefined,
    info: undefined,
  });
};

export let checkStatus = (req: Request, res: Response) => {
  if (req.session.user) {
    if (req.session.user.role == constant.USER_ROLE_ADMIN) {
      request.get(
        {
          url: process.env.API_URL,
        },
        function (err: any, response: any) {
          if (!err && response.statusCode == 200) {
            const data = JSON.parse(response.body);
            console.log(data);
            res.render("check-status/index", {
              title: "Check status",
              error: undefined,
              info: data,
            });
          } else {
            res.render("check-status/index", {
              title: "Check status",
              error: err,
              info: undefined,
            });
          }
        }
      );
    } else {
      res.render("check-status/index", {
        title: "Check status",
        error: "You are not allowed to use this feature.",
        info: undefined,
      });
    }
  } else {
    res.redirect("login");
  }
};
