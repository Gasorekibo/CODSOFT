import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnection.js";
import userRoute from "./routes/userRoutes.js";
import jobRoute from "./routes/jobRoutes.js";

dotenv.config()
const app = express();

// ==== MIDDLEWARES ======
app.use(express.json());
app.use(cors());
dbConnect()
// ===== ROUTES =========
app.use("/api/v1/user", userRoute)
app.use("/api/v1/job", jobRoute)
app.listen(process.env.PORT || 8080, ()=> console.log("Server started 🔥🔥❤️"));