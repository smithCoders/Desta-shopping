const express=require("express");
const router=express.Router();
const sellerController=require("../controllers/sellerController");
router.route("/signup").post(sellerController.signup);
router.route("/login").post(sellerController.login);
module.exports=router;