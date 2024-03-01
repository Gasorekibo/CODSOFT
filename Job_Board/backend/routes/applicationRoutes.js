import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createApplication, getApplicantByJobID } from "../controllers/applicationCtrl.js";
import {
  resumeUploadMiddleware,
  saveResumeMiddleware,
} from "../middlewares/fileUploadMiddleware.js";

const applicationRoute = express.Router();

applicationRoute.post(
  "/new",
  authMiddleware,
  resumeUploadMiddleware,
  saveResumeMiddleware,
  createApplication
);

applicationRoute.get("/all-application/:id", authMiddleware, getApplicantByJobID)
export default applicationRoute;
