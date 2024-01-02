const catchAsync = require("../utils/catchAsync");
const Seller=require("../model/sellerSchema");
const appError = require("../utils/AppError");
const logger=require("../utils/logger");
const tokens=require("../utils/jwt")
const factory=require("./factoryHandler")

exports.signUp=catchAsync(async(req,res,next)=>{
const{firstName,lastName,email,phoneNumber,password,passwordConfirm,shopName,shopDescription}=req.body;
const exisitngSeller=await Seller.findOne({email});
 // logger 
  if(!exisitngSeller){
    logger.info(`new user signup with email ${email} sucesful`)
  }
else{
  logger.warn(`new user signup  with email ${email} is failed`)
}

if(exisitngSeller){
    return next(new appError("user already exist",404))
}

const seller=await Seller.create({
   firstName,
   lastName,
   email,
   phoneNumber,
   password,
   passwordConfirm,
   shopName,
   shopDescription 
})
tokens.createSendToken(seller,201,res)

})
exports.login=catchAsync(async(req,res,next)=>{
    const{emailOrphone,password}=req.body;
    if(!emailOrphone || !password){
        return next(new appError("Please provide both email or phone number and password",400))
    }
    const seller=await Seller.findOne({$or:[{email:emailOrphone},{phoneNumber:emailOrphone}]}).select("+password")
    if(!seller ||!(await seller.comparePassword(password,seller.password))){
  return next(new appError("Invalid credentials. Please check your email, phone number, or password.", 401));
    }
    tokens.createSendToken(seller,200,res)
})


