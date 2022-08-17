const express = require("express");
const router = express.Router();
import * as loginController from "./home.controller";

router.get("", loginController.index);

module.exports = router;