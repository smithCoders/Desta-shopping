const User=require("../model/userModel");
const AppError=require("../util/AppError");
const catchAsync=require("../util/catchAsync");
 exports.signup=catchAsync(async(req,res,next)=>{
    const{name,email,password}=req.body;
    console.log(req.body)
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
 });
  exports.users=catchAsync(async(req,res,next)=>{
    const users=await User.find();
    
    console.log(users.ength)
      res.status(200).json({status:"sucess",length:users.length,data:{users}})

  })