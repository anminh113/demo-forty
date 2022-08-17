const express = require("express");
const router = express.Router();
import * as loginController from "./login.controller";

router.get("/", loginController.index);
router.post("/", loginController.login);

module.exports = router;