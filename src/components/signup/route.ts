import express from "express";
import * as SignupController from "./signup.controller";

const router = express.Router();

router.get("/", SignupController.index);
router.post("/", SignupController.signup);

module.exports = router;