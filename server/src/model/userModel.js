const mongoose=require("mongoose");
const  validator=require("validator")
const bcrypt=require("bcryptjs");
const crypto=require("crypto")
const{Schema,model}=mongoose;
const userSchema= new Schema({
    firstName:{
        type:String,
      required: [true, "Please enter your first name."],

    },
    lastName:{
        type:String,
       required: [true, "Please enter your last name."],
    
    },
    email:{
        type:String,
        required: [true, "Please provide your email address."],
        unique: [true, "Email already in use."],
          validate: [validator.isEmail, "Invalid email address."],
          lowercase:true
    },
   phoneNumber: {
    type: String,
    required: [false, 'Please provide your phone number.'],
    unique: [true, 'Phone number already used.'],
    // validate: {
    //   validator: function (value) {
    //     //  /^\d{10}$/ for a 10-digit phone number.
    //     return /^\\d{10}$/.test(value);
    //   },
    //   message: 'Please enter a valid 10-digit phone number.',
    // },
  },
    password:{
        type:String,
        required:[function(){
            return this.isNew || this.isModified("password")
        },"password is required"],
        minlength:[7,"password must be greather than 7 character"],
        select:false

    },
    passwordConfirm:{
        type:String,
        required:[function(){
            return this.isModified("password")
        },"please confirm your password"],
        validate:{
            validator:function(el){
                return !this.isNew || el===this.password
            },
            message:"password isn't match"
        }
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
    roles:{
      type:String,
      deafult:"user"},
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

// virtual to combine first and last name
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

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