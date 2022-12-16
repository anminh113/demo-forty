import express from "express";
import * as homeController from "./home.controller";

const router = express.Router();

router.get("/", homeController.index);
router.get("/home", homeController.home);

module.exports = router;