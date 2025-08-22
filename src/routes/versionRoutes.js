const express = require("express");
const versionController = require("../controllers/versionController");

const router = express.Router();

router.get("/version", (req, res) => versionController.getVersion(req, res));

module.exports = router;
