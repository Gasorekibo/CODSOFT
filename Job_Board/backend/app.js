import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnection.js";

dotenv.config()
const app = express();

// ==== MIDDLEWARES ======
app.use(express.json());
app.use(cors());
dbConnect()
// ===== ROUTES =========
app.listen(process.env.PORT || 5000, ()=> console.log("Server started 🔥🔥❤️"));