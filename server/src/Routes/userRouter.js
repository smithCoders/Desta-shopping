const express=require("express");
const authController=require("../controller/authController");
const router=express.Router();
router.route("/user/signup").post(authController.signup)
router.route("/user/").get(authController.users)
module.exports=router