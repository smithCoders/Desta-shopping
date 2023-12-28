const { promisify } = require('util');
const catchAsync=require("../utils/catchAsync");
const AppError=require("../utils/AppError");
const User=require("../model/userModel")
const  jwt=require("jsonwebtoken");
const logger=require("../utils/logger");
const tokens=require("../utils/jwt")
// genearte OTP.
exports.generateOTP=()=>{
    return Math.floor(100_000+Math.random()*900_000).toString()
}
exports.signup = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, password, passwordConfirm, role } = req.body;

  // Check if the email is unique
  const existingUser = await User.findOne({ email });
   // logger 
  if(!existingUser){
    logger.info(`new user signup with email ${email} sucesful`)
  }
else{
  logger.warn(`new user signup  with email ${email} is failed`)
}
  if (existingUser) {
    return next(new AppError("User already exists", 400));
  }
 
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    passwordConfirm,
    role,
  });

 tokens.createSendToken(newUser,200,res)
});
// login
exports.login = catchAsync(async (req, res, next) => {
  // Validate input
  const { emailorPhone, password } = req.body;
  if (!emailorPhone || !password) {
    return next(new AppError("Please provide both email or phone number and password.", 400));
  }

  // Check if user exists and password is correct
  const user = await User.findOne({ $or: [{ email: emailorPhone }, { phoneNumber: emailorPhone }] }).select("+password");
// Log the login attempt
if(user){
  if(user.comparePassword(password,user.password)){
    logger.info(`Login attempt for ${user.email} successful`);

}
else{
  logger.warn(`Login attempt for ${user.email} failed`);
}
}
else{
  logger.warn(`Failed to login attempt unkown user of ${emailorPhone}`)
}


  if (!user || !(await user.comparePassword(password, user.password))) {
    return next(new AppError("Invalid credentials. Please check your email, phone number, or password.", 401));
  }

  // If everything is okay, send the token to the client
tokens.createSendToken(user,200,res)
});
// protect route middleware.
exports.protect=catchAsync(async(req,res,next)=>{
    // 1. check if token exist.
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token=req.headers.authorization.split(" ")[1]
    }
 
    if(!token){
        return next(new AppError("you are not logged in please login to get access",401))
    }
    // 2. verify token.
    const decoded=await promisify(jwt.verify)(token,process.env.JWT_SECRET)
    // 3. check if user still exist.
    const currentUser=await User.findById(decoded.id)
    if(!currentUser){
        return next(new AppError("the user belonging to this token does not exist",401))
    }

    // grant access to protected route.
    req.user=currentUser;
    next()
})

// restrict route middleware.
exports.restrictTo=(...roles)=>{
    return (req,res,next)=>{
      console.log(req.user)
        if(!roles.includes(req.user.role)){
            return next(new AppError("you do not have permission to perform this action",403))
        }
        next()
    }
}

