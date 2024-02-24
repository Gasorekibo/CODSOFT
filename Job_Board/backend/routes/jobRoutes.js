import express from "express"
import { getAllJobs, createJob, getJobById, updateJob, deleteJob } from "../controllers/jobController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const jobRoute = express.Router();

jobRoute.post("/create", authMiddleware, createJob);
jobRoute.get("/", authMiddleware, getAllJobs);
jobRoute.get("/:id", authMiddleware, getJobById);
jobRoute.put("/update/:id",authMiddleware, updateJob);
jobRoute.delete("/delete/:id", authMiddleware, deleteJob)

export default jobRoute