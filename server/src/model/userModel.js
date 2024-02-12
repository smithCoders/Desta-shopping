const mongoose=require("mongoose");
const  validator=require("validator")
const bcrypt=require("bcryptjs");
const crypto=require("crypto")
const{Schema,model}=mongoose;
const userSchema= new Schema({
    name:{
        type:String,
      required: [true, "Please enter your full Name name."],

    },
  
    email:{
        type:String,
        required: [true, "Please provide your email address."],
        unique: [true, "Email already in use."],
          validate: [validator.isEmail, "Invalid email address."],
          lowercase:true
    },

    password:{
        type:String,
        required:[true,"password is required"],
        minlength:[7,"password must be greather than 7 character"],
        select:false

    },
   

   photo: {
    type: String,
    default: "default-photo.jpg", // default photo
  },
    address:String,
  order: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }],
    cart:[{
      type:Schema.Types.ObjectId,
      ref:'Cart'
    }],
   roles: {
  type: [String],
  default: ["user"]
},

    active:{
        type:Boolean,
        default:true,
        select:false
    },
    socialProviders:[String],
    passwordChangedAt:Date,
    passwordResetToken:String,
    PasswordResetTokenExpires:Date,
      accessToken: String,
    refreshToken: String,
    accessTokenExpires: Date,
    refreshTokenExpires: Date,
},{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
}

);

// hashing password.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;

  try {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
  } catch (err) {
    console.error(err);
    return next(err);
  }
});
// comparing password.
userSchema.methods.comparePassword=async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword)
}


// passwor reset generator.
userSchema.methods.passwordResetGenerator=async function(){
    // generate   reset token.
    const resetToken=crypto.randomBytes(32).toString("hex");
    this.passwordResetToken=crypto.createHash("sha256").update(resetToken).digest("hex");
    // clear tokens.
    this.accessToken=undefined;
    this.refreshToken=undefined;
    this.accessTokenExpires=undefined;
    this.refreshTokenExpires=undefined
    // expire time.
    this.PasswordResetTokenExpires=Date.now()+60*30*1000;
    return resetToken;
}

const User=model("User",userSchema);

module.exports=User