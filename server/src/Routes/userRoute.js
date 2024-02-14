const express= require("express");
const router= express.Router();
const authController= require("../controllers/authController");
const userController=require("../controllers/userController");
const multer=require("../utils/multer")
const token=require("../utils/token")
// multer.uploadImg,multer.resizeUserPhoto,

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

router.use(authController.authorize)
router.route("/").get(userController.getAllUser)
router.route("/:id").get(userController.getUser)
// router.route("/:id").get(userController.getUser)
router.route("/logout").get(authController.logOut)
router.route("/acess-token").post(token.generateAccessToken)
router.route("/refrsh-token").post(authController.getRefreshToken)
router.route("/my-profile").get(userController.getProfile)
router.route("/update-me").patch( userController.updateProfile)
module.exports=router