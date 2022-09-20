import express from "express";
import getAllUsers from "../controllers/getAllController.js";
// import { verifySessionToken } from "../middlewares/authCheck.js";

const router = express.Router();

router.get("/", getAllUsers);

export default router;
