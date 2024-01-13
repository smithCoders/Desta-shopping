const catchAsync = require("../utils/catchAsync");
const Seller=require("../model/sellerSchema");
const AppError = require("../utils/AppError");
const logger=require("../utils/logger");
const tokens=require("../utils/jwt")
const factory=require("./factoryHandler")
const authController=require("./authController")

exports.signup=authController.signup(Seller,{roles:"seller",otherField:{shopName:"",shopDescription:""}})
exports.login=authController.login(Seller)
exports.authorize=authController.authorize(Seller)
// restrict route middleware.

