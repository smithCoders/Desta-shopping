const express=require("express");
const router=express.Router();
const authController=require("../controllers/authController");
const userController=require("../controllers/userController");
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/update-me").patch(authController.protect,userController.updateMe)
module.exports=router