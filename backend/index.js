import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import cookieParser from "cookie-parser";
// import Users from "./models/UserModel.js";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
  // Users.sync();
} catch (error) {
  console.log(error);
}
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(UserRoute);
app.listen(5000, () => console.log("Server up and running..."));
