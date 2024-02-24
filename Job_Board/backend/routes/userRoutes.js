import express from "express";
import { authMiddleware} from "../middlewares/authMiddleware.js"
import {profilePhotoUploadMiddleware,resizeImageMiddleware } from "../middlewares/fileUploadMiddleware.js"
import { userRegisterCtrl, profilePhotoUploadCtrl, loginUserCtrl } from "../controllers/authControllers.js";
const userRoute = express.Router();

userRoute.post("/register", userRegisterCtrl);
userRoute.post("/login", loginUserCtrl);
userRoute.put("/profile",authMiddleware,
profilePhotoUploadMiddleware.single("image"),
resizeImageMiddleware, profilePhotoUploadCtrl)

export default userRoute;