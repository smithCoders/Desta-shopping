const multer = require("multer");
const sharp = require("sharp");
const { v4: uuidv4 } = require('uuid'); // Import uuid for generating unique filenames
const AppError = require("./AppError");

// multer storage.
const multerStorage = multer.memoryStorage();

// filter only the uploaded image.
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true)
    } else {
        cb(new AppError("Not an image! Please upload only images.", 400), false)
    }
}

// Multer configuration
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

exports.uploadImg = upload.single("photo");

// Resize user photo.
exports.resizeUserPhoto = async (req, res, next) => {
    if (!req.file) {
        return next();
    }

    // Generate unique filename using uuid
    const filename = `user-${uuidv4()}.jpeg`;

    // Resize and save the image
    await sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`uploads/${filename}`);

    // Store the filename in the request object for later use
    req.file.filename = filename;

    next();
}
