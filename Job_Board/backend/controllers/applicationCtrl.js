import Application from "../models/Application.js";
import expressAsyncHandler from "express-async-handler";

const createApplication = expressAsyncHandler(async (req, res) => {
  try {
    const isApplicationExist = await Application.findOne({
      $and: [{ userId: req.user._id }, { jobId: req.body.jobId }],
    });
    if (isApplicationExist)
      return res.status(409).json("You have already applied for this job");
    const application = await Application.create({
      jobId: req.body.jobId,
      userId: req.user._id,
      cover: req.body.cover,
      resume: req.file.filename,
    });
    if (!application) throw new Error("Failed to add the application");
    res.status(201).json({
      message: "New application successfully",
      data: application,
    });
  } catch (error) {
    return res.json(error.message || "Something Went wrong try again");
  }
});

// Find  all applications by a specific job id

const getApplicantByJobID = expressAsyncHandler(async (req, res) => {
  try {
    const jobs = await Application.find({ jobId: req.params.id }).populate(
      "userId"
    );
    if (!jobs) return res.status(404).json("No Applications found");
    res.status(200).json(jobs);
  } catch (error) {
    return res.json(error.message || "Something Went wrong try again");
  }
});


export { createApplication, getApplicantByJobID };
