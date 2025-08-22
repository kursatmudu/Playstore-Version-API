import express from "express";
import versionRoutes from "./routes/versionRoutes.js";

const app = express();

app.use(express.json());
app.use("/api", versionRoutes);

export default app;