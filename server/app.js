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
const orderRouter=require("./src/Routes/orderRoute");
const cartRouter=require("./src/Routes/cartRoute");
const  redis=require("./src/cache/redisConfig");

if(process.env.NODE_ENV==="development"){
  app.use(morgan("dev"))
}
// connect  redis.
redis.connectRedis()
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
app.use("/api/v1/order",orderRouter)
app.use("/api/v1/cart",cartRouter)

// return error if route is not found.
app.all("*",(req,res,next)=>{
  next(new AppError(`Can't find ${req.originalUrl} on this server!`,404))
})

// error handler.
app.use(error)


module.exports = app;
