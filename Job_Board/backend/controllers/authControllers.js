import expressAsyncHandler from "express-async-handler";
import fs from "fs";
import generateToken from "../config/generateToken.js";
import User from "../models/User.js";
import cloudinaryUploadPhoto from "../utils/cloudinary.js";
import validateMongodbId from "../utils/validateMongodbId.js";
import { sendEmail } from "../utils/sendEmail.js";

// === USER REGISTRATION ======

const userRegisterCtrl = expressAsyncHandler(async(req,res)=> {
    const {firstName, lastName, email, password, bio, role} = req.body;
    try {
        const  userExist = await User.findOne({email});
        if(userExist) throw new Error("User already exists");
        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            role,
            bio,
        })
        return res.status(201).json({
            message:"User created successfully",
            user
        })
    } catch (error) {
      return res.json(error.message || "Something Went wrong try again")  
    }
})

//-------------------------------
//Login user
//-------------------------------

const loginUserCtrl = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exists
  const userFound = await User.findOne({ email });

  if (userFound && (await userFound.isPasswordMatched(password))) {
    //Check if password is match
    res.json({
      _id: userFound?._id,
      firstName: userFound?.firstName,
      lastName: userFound?.lastName,
      email: userFound?.email,
      profilePhoto: userFound?.profilePhoto,
      isAdmin: userFound?.isAdmin,
      token: generateToken(userFound?._id),
      role:userFound?.role
    });
  } else {
    res.status(401);
    throw new Error("Invalid Login Credentials");
  }
});
const profilePhotoUploadCtrl = expressAsyncHandler(async (req, res) => {
    //Find the login user
  
    const { _id } = req.user;
  
    //block user
  
    //1. Get the local path to img
    const localPath = `public/images/profiles/${req.file.filename}`;
    //2.Upload to cloudinary
    const imgUploaded = await cloudinaryUploadPhoto(localPath);
  
    const foundUser = await User.findByIdAndUpdate(
      _id,
      {
        profilePhoto: imgUploaded?.url,
      },
      { new: true }
    );
    //remove the saved img from local file
    fs.unlinkSync(localPath);
    res.json(foundUser);
  });

  export {
    profilePhotoUploadCtrl,
    userRegisterCtrl,
    loginUserCtrl
  }