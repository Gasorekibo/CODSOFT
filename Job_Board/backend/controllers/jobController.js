import Job from "../models/Job.js";
import expressAsyncHandler from "express-async-handler";

const createJob = expressAsyncHandler(async (req, res) => {
  try {
    const job = await Job.create({
        author:req.user?._id,
        ...req.body
    });
    return res.status(201).json({
      success: true,
      data: job,
    });
  } catch (error) {
    return res.json(error.message || "Something Went wrong try again");
  }
});

// ==== Get All Jobs Controller
const getAllJobs = expressAsyncHandler(async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    return res.json(error.message || "Something went wrong");
  }
});

//=====  Get Job by ID Controller
const getJobById = expressAsyncHandler(async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    return res.json(error.message || "Something went wrong");
  }
});

// Update Job Controller
const updateJob = expressAsyncHandler(async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedJob) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Job Controller
const deleteJob = expressAsyncHandler(async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export {
    createJob,
    getJobById,
    getAllJobs,
    updateJob,
    deleteJob
}
