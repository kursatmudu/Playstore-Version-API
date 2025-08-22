const express = require("express");
const versionRoutes = require("./routes/versionRoutes");
const { port } = require("./config/serverConfig");

const app = express();

app.use(express.json());
app.use("/api", versionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
