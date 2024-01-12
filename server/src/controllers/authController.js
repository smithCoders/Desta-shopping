const { promisify } = require('util');
const catchAsync=require("../utils/catchAsync");
const AppError=require("../utils/AppError");
const User=require("../model/userModel")
const  jwt=require("jsonwebtoken");
const logger=require("../utils/logger");
const jwtTokens=require("../utils/jwt")
const  tokens=require("../utils/token");
const { cli } = require('winston/lib/winston/config');
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

 jwtTokens.createSendToken(newUser,200,res)
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
// Log the login attempt.
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

  
  
  // // send access token as cookie.
  // res.cookie("acess-token",accessToken,{
  //   httpOnly:true,
  //   secure:process.env.NODE_ENV="production",
  //   maxAge:30*60*1000

  // })
  
jwtTokens.createSendToken(user,200,res)

});
// protect route middleware.clear

exports.authorize = async (req, res, next) => {
  try {
    // 1. Check if the authorization header is present
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.accessToken) {
      token = req.cookies.accessToken;
    }
    
    if (!token) {
      return next(
        new AppError("you are not logged in please login to get access", 401)
      );
    }

    // 3. Verify the token using the correct secret
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

   

    // 4. Check if the user exists
    const currentUser = await User.findById(decoded.user);
    if (!currentUser) {
      return next(new AppError('Unauthorized - Invalid user', 401));
    }

    // 5. Attach the user information to the request
    req.user = currentUser;

    next();
  } catch (err) {
    console.log("Error:", err);
    return next(new AppError('Unauthorized - Invalid token', 401));
  }
};


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

exports.getRefreshToken=catchAsync(async(req,res,next)=>{
  const refreshToken=req.cookies.refreshToken;

  if(!refreshToken){
    return next(new AppError("please provide a refresh token",400))
  }
  // verify refresh token.
  const decoded=tokens.verifyRefreshToken(refreshToken)

  // check if user exist.
  const currentUser=await User.findById(decoded.user)

  if(!currentUser ){
    return next(new AppError("the user belonging to this token does not exist",401))
}
// check if refresh token is valid.

if (currentUser.refreshToken !== refreshToken) {
  return next(new AppError("Invalid refresh token", 401));
}

// generate new acess token.
const accessToken=tokens.generateAccessToken(currentUser)
// send new access token as cookie.
res.cookie("acessToken",accessToken,{
  httpOnly:true,
  maxAge:30*60*1000,
  secure:process.env.NODE_ENV="production"
})
res.status(200).json({
  status:"sucess",
  accessToken
})
}
);
// logout.
exports.logOut=catchAsync(async(req,res,next)=>{
  const  user=req.user;
  if(!user){
    return next(new AppError("you are not logged in please login to get access",401))

  }
  // clear access token.
  res.clear("accessToken");
res.status(200).json({
  status:"sucess",

})


})