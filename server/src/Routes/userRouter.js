const express=require("express");
const authController=require("../controller/authController");
const router=express.Router();
router.route("/user/signup").post(authController.signup)
router.route("/user/login").post(authController.login);
router.route("/user").get(authController.userProfile)

module.exports=router