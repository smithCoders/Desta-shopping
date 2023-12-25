const User=require("../model/userModel");
const catchAsync=require("../utils/catchAsync");
const AppError=require("../utils/AppError");


const updateObject = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

// update me.
exports.updateMe = catchAsync(async (req, res, next) => {
  // throw error when the user tries to update the password.
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("To update your password, please use /updatePassword route", 400));
  }
  // 2. filter out unwanted fields.
  const allowedFields = ["firstName", "lastName", "email", "phoneNumber", "photo", "address"];
  const filteredBody = updateObject(req.body, ...allowedFields);
  // update user photo in the db.
  if (req.file) {
    filteredBody.photo = req.file.filename;
  } else {
    // If the user didn't provide a photo, use the default value
    filteredBody.photo = "default-photo.jpg";
  }
  // update user document.
  const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});
