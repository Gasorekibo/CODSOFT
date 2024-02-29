import Application from "../models/Application.js";
import expressAsyncHandler from "express-async-handler";

const createApplication = expressAsyncHandler(async(req, res)=> {
    console.log(req.file)
})

export {createApplication}