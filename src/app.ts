import express from "express";
import cors from "cors";
import path from "path";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static(path.join(__dirname, "public")));

//routes import
import userRoute from "./routes/user.routes";

//routes declaration
app.use("/api/v1/users", userRoute);

export { app };
