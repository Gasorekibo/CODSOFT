import mongoose from "mongoose";
import User from "./User.js";

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: false },
    description:{ type: String, required: false },
    deadline:{type:Date, required:true},
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

const Job = mongoose.model("Job", jobSchema);
export default Job