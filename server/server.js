const mongoose=require("mongoose");
const dotenv=require("dotenv");
const app = require("./app");
dotenv.config({
    path:"./src/config/.env"
})
// handle uncaught exceptions.
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("uncaught exception, shutting down...");
  process.exit(1);
});


mongoose.connect(process.env.MONGO_URL).then((db)=>{console.log("MongoDB connected Sucessfully")})
.catch(err=>{console.log("Error while connecting Mongo",err.message)})
const PORT=process.env.PORT ||8000;
app.listen(PORT,()=>{
    console.log(`server running on Port ${PORT}`)
})


