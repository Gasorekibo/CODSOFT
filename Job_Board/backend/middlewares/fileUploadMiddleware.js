// configure multer to specify the file we want to upload, this file will contain other explanation coz it is my first time to work with this library

import expressAsyncHandler from "express-async-handler";
import multer from "multer";
import sharp from "sharp";
import path from "path";

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    // upload success
    cb(null, true);
  } else {
    // upload fails
    cb({ msg: "unsupport image format." }, false);
  }
};

// configure our middle ware

const profilePhotoUploadMiddleware = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: {
    fileSize: 4000000, //Max 4MB
  },
});

// profile image resizing middleware
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







export {
  profilePhotoUploadMiddleware,
  resizeImageMiddleware,
};
