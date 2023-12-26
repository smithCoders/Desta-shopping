const express= require("express");
const router= express.Router();
const authController= require("../controllers/authController");
const userController=require("../controllers/userController");
const multer=require("../utils/multer")
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.use(authController.protect)
router.route("/").get(userController.getUser)
router.route("/update-me").patch( multer.uploadImg,multer.resizeUserPhoto,userController.updateMe)
module.exports=router