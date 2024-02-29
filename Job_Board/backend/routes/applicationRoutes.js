import express from "express";
import {authMiddleware} from "../middlewares/authMiddleware.js"
import { createApplication } from "../controllers/applicationCtrl.js";


const applicationRoute = express.Router();


applicationRoute.post("/new",authMiddleware, createApplication);
export default applicationRoute