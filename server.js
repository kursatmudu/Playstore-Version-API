const app = require("./src/app");
const { port } = require("./src/config/serverConfig");

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
