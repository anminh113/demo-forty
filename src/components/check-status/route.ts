import express from "express";
import * as checkStatusController from "./check-status.controller";

const router = express.Router();

router.get("/", checkStatusController.index);
router.post("/", checkStatusController.checkStatus);

module.exports = router;