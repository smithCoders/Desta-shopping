const mongoose=require("mongoose");
const validator=require("validator")
const bcrypt=require("bcryptjs");
const{Schema,model}=mongoose;
const sellerSchema = Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your first name.'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your last name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address.'],
    unique: [true, 'Email already in use.'],
    validate: [validator.isEmail, 'Invalid email address.'],
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide your phone number.'],
    unique: [true, 'Phone number already used.'],
    validate: {
      validator: function (value) {
        // Example: /^\d{10}$/ for a 10-digit phone number.
        return /^\d{10}$/.test(value);
      },
      message: 'Please enter a valid 10-digit phone number.',
    },
  },
  password: {
    type: String,
    required: [function () {
      return this.isNew || this.isModified('password');
    }, 'Password is required.'],
    minlength: [7, 'Password must be greater than 7 characters.'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [function () {
      return this.isModified('password');
    }, 'Please confirm your password.'],
    validate: {
      validator: function (el) {
        return !this.isNew || el === this.password;
      },
      message: 'Password confirmation does not match.',
    },
  },
  shopName: {
    type: String,
    required: [true, 'Please enter shop name.'],
    minlength: [3, 'Shop name must be at least 3 characters.'],
  },
  shopDescription: {
    type: String,
    required: [true, 'Please enter shop description.'],
    minlength: [10, 'Shop description must be at least 10 characters.'],
  },
  shopLogo: String,
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  orderHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Reviews',
  }],
  isVerified: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  role:{
    type:String,
    default:"seller",
    
  },
  passwordResetToken: String,
  passwordResetTokenExpires: Date,
});
// hashing password.
sellerSchema.pre("save", async function (next) {
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
sellerSchema.methods.comparePassword=async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword)
}

// virtual to combine first and last name.
sellerSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// passwor reset generator.
sellerSchema.methods.passwordResetGenerator=async function(){
    // generate   reset token.
    const resetToken=crypto.randomBytes(32).toString("hex");
    this.passwordResetToken=crypto.createHash("sha256").update(resetToken).digest("hex");
    // expire time.
    this.PasswordResetTokenExpires=Date.now()+60*30*1000;
    return resetToken;
}

const Seller=model("Seller",sellerSchema);

module.exports=Seller;