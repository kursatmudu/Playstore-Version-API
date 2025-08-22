const express = require("express");
const versionRoutes = require("./routes/versionRoutes");

const app = express();

app.use(express.json());
app.use("/api", versionRoutes);

module.exports = app;
