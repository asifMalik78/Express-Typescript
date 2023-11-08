import dotenv from "dotenv";
import connectDB from "./db";
import { app } from "./app";

dotenv.config({ path: "./.env" });


const port = process.env.PORT || 8000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err.message);
  });
