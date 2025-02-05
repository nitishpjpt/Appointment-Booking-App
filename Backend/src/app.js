import express from "express";
import cors from "cors";
import routes from "./routes/index.routes.js";

const app = express();

app.use(
  cors({
    origin: "*", // frontend url
    methods: ["POST", "DELETE", "PUT", "GET"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(express.json({limit: "16kb"})),
  app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));

app.use("/api/v1", routes);

export default app;
