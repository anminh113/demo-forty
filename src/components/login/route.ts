import express from "express";
import * as loginController from "./login.controller";

const router = express.Router();

router.get("/", loginController.index);
router.post("/", loginController.login);

module.exports = router;