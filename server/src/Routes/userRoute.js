const express= require("express");
const router= express.Router();
const authController= require("../controllers/authController");
const userController=require("../controllers/userController");
const multer=require("../utils/multer")
const token=require("../utils/token")

router.route("/signup").post(userController.userSignup);
router.route("/login").post(userController.login);

router.use(userController.authorize)
router.route("/").get(userController.getAllUser)
router.route("/:id").get(userController.getUser)
// router.route("/:id").get(userController.getUser)
router.route("/logout").get(authController.logOut)
router.route("/acess-token").post(token.generateAccessToken)
router.route("/refrsh-token").post(authController.getRefreshToken)
router.route("/my-profile").get(userController.getProfile)
router.route("/update-me").patch( multer.uploadImg,multer.resizeUserPhoto,userController.updateProfile)
module.exports=router