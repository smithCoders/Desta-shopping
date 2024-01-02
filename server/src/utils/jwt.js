const jwt=require("jsonwebtoken")
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIREs_IN,
  });
};

 exports.createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  // if the app is in production we set secure=true, unless it should be false
  if (process.env.NODE_ENV === "production") {
    cookieOptions.secure = true;
  }
  // create cookies.
  res.cookie("jwt", token, cookieOptions);
  // remove password.
  user.password = undefined;
  res.status(statusCode).json({ status: "sucess", token, data: { user } });
};