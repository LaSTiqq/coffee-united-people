import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import loginRoute from "./routes/loginRoute.js";
import registerRoute from "./routes/registerRoute.js";
import getAllRoute from "./routes/getAllRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/get", getAllRoute);

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection success");
  } catch (error) {
    console.error(error);
  }
};

app.listen(3001, () => connection());
