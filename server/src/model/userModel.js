const mongoose= require("mongoose");
const  validator=require("validator")
const bcrypt=require("bcryptjs");
const{Schema,model}=mongoose;
const userSchema=  Schema({
  name:{
    type:String,
    required:[true,"name is required"]
  
  },
  email:{
    type:String,
    required:[true,"email required"],
    unique:[true,"email already exist"],
    trim:true,
    validare:[validator.isEmail,"invalid email address"]

  },
  password:{
    type:String,
    required:[true,"passwrd required"]

  },
  isVerified:{
    type:Boolean,
    default:false
  }
})

// hashing password.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;

  try {
    this.password =  bcrypt.hashSync(this.password, 12);

  } catch (err) {
    console.error(err);
    return next(err);
  }
});
// comparing password.
userSchema.methods.comparePassword=function(candidatePassword,userPassword){
    return  bcrypt.compareSync(candidatePassword,userPassword)
}
const User=model("User",userSchema);

module.exports=User