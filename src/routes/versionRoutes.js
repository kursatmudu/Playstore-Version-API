import express from "express";
import versionController from "../controllers/versionController.js";

const router = express.Router();

router.get("/version", (req, res) => versionController.getVersion(req, res));

export default router;
