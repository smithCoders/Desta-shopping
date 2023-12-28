const express = require("express");

const cookieParser=require("cookie-parser");
const fileUpload=require("express-fileupload");
const morgan=require("morgan")
const cors=require("cors")
const app=express()
const AppError=require("./src/utils/AppError");
const error=require("./src/middleware/error")
const userRouter=require("./src/Routes/userRoute");
const productRouter=require("./src/Routes/productRoute");
const sellerRouter=require("./src/Routes/sellerRoute");


if(process.env.NODE_ENV==="development"){
  app.use(morgan("dev"))
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/",express.static("public/img"));
app.use(fileUpload({
  useTempFiles:true,
  
}));
// config.
if(process.env.NODE_ENV==="production"){
  require("dotenv").config({
    path:"./src/config/.env"
  })
}

// Routes.
app.use("/api/v1/users",userRouter)
app.use("/api/v1/products",productRouter)
app.use("/api/v1/seller",sellerRouter)
// return error if route is not found.
app.all("*",(req,res,next)=>{
  next(new AppError(`Can't find ${req.originalUrl} on this server!`,404))
})

// error handler.
app.use(error)


module.exports = app;
