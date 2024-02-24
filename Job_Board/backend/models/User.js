import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Job from "./Job.js";

// Create User model

// Define UserSchema
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is Required"],
  },
  lastName: {
    type: String,
    required: [true, "First Name is Required"],
  },
  profilePhoto: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_640.png",
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
  },
  bio: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["admin", "employer", "employee"],
  },
  jobApplied: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
  },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  timestamps: true,
});


// SOME MIDDLEWARE

// Creating Virtual method to get the post created by this user because we don't have the field for post


// hash user password
UserSchema.pre("save", async function (next) {
  // Check for password update
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password using bcryptjs
UserSchema.methods.isPasswordMatched = async function (userInputPassword) {
  return bcrypt.compare(userInputPassword, this.password);
};

// Compile schema into a model

const User = mongoose.model("User", UserSchema);
export default User;
