const express=require("express");
const cookieParser=require("cookie-parser");
const morgan=require("morgan");
const cors=require("cors");
const error=require("./src/middleware/error")
const AppError=require("./src/util/AppError")
const userRouter=require("./src/Routes/userRouter")
const app=express();
if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))}

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

 app.use("/api/v1",userRouter)
 app.all("*", (req, res, next) => {
  next(new AppError(`Page not found(${req.originalUrl})`, 404));
});
app.use(error)
module.exports=app