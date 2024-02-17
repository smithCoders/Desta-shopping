const User=require("../model/userModel");
const AppError=require("../util/AppError");
const catchAsync=require("../util/catchAsync");
const sendEmail= require("../util/email");
const jwt=require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIREs_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    // send the cookie  to https  header ony
    // secure: true,

    // restrict the cookie  from being accessed or modifeid   by browser(prevent cross site scripting(xss) attacks)
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

 exports.signup=catchAsync(async(req,res,next)=>{
    const{name,email,password}=req.body;
 
    const userExist=await User?.findOne({email});
    if(userExist){
        return next(new AppError("user already exist",400))
    }
    const  newUser=await User.create({
        name,
        email,
        password
    })


    res.status(201).json({status:"sucess",message:"please check your email",data:{newUser}})
    //    const activation=activationToken(newUser)

//        const url=`${req.protocol}://${req.get("host")}/activation/${activation}`;
//        try{

//        } catch(err){
//         return next(new AppError(err.message,500))
//        }
//     const data={
//         user:{
//             firstName:newUser.name,
//             email:newUser.email,
//             activationLink:activation
//         },
//         url, };
//         await sendEmail({
//             email:newUser.email,
//             template:"activationEmail.ejs",
//             data

//         })
 });
exports.login=catchAsync(async(req,res,next)=>{
    const{email,password}=req.body;
    if(!email || !password || email==="" || password===""){
        return next(new AppError("All credentials required",400))
    }
    const user=await  User.findOne({email}).select("+password");
    if(!user || !(await user.comparePassword(password,user.password))){
        return next(new AppError("email or password incorrect",401))
    }
    createSendToken(user,200,res);



})
exports.isAuthenticated=catchAsync(async(req,res,next)=>{
    const{token}=req.cookies;
    if(!token){
        return next(new AppError("please login to continue.",401))
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decoded.id);
    next()
});
// load user.
exports.userProfile=catchAsync(async(req,res,next)=>{
    const user=await User.findById(req.user?.id);
    console.log(user)
    if(!user){
        return next(new AppError("user not found",404))
    }
    res.status(200).json({status:"sucess",data:{user}})
})