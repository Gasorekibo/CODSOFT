
import expressAsyncHandler from "express-async-handler";
import multer from "multer";
import sharp from "sharp";
import path from "path";
import { error } from "console";

const profilePhotoStorage = multer.memoryStorage();
const profilePhotoFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ msg: "Unsupported image format." }, false);
  }
};

//  ============= RESUME  UPLOAD MIDDLEWARE ==================
const resumeStorage = multer.memoryStorage();
const resumeFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(
      { msg: "Unsupported file format. Please upload a PDF document." },
      false
    );
  }
};


const profilePhotoUploadMiddleware = multer({
  storage: profilePhotoStorage,
  fileFilter: profilePhotoFilter,
  limits: {
    fileSize: 4000000, // Max 4MB
  },
}).single("image");

const resumeUploadMiddleware = multer({
  storage: resumeStorage,
  fileFilter: resumeFilter,
  limits: {
    fileSize: 10000000, // Max 10MB
  },
}).single("resume");


const resizeImageMiddleware = expressAsyncHandler(async (req, res, next) => {
  if (!req.file) {
    next();
  } else {
    req.file.filename = `user-${Date.now()}-${req.file.originalname}`;
    await sharp(req.file.buffer)
      .resize(250, 250)
      .toFormat("jpeg")
      .jpeg({
        quality: 90,
      })
      .toFile(path.join(`public/images/profiles/${req.file.filename}`));
    next();
  }
});

const saveResumeMiddleware = expressAsyncHandler(async (req, res, next) => {
  if (!req.file) {
    next();
  } else {
    req.file.filename = `resume-${Date.now()}-${req.file.originalname}`;
    // Save logic (if needed)
    next();
  }
});

export {
  profilePhotoUploadMiddleware,
  resizeImageMiddleware,
  resumeUploadMiddleware,
  saveResumeMiddleware,
};
