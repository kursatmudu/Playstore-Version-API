import app from "./src/app.js";
import { port } from "./src/config/serverConfig.js";

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
