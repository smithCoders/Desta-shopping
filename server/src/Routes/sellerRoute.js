const express=require("express");
const router=express.Router();
const sellerController=require("../controllers/sellerController");
const productController=require("../controllers/productController")
// router.route("/signup").post(sellerController.signup);
// router.route("/login").post(sellerController.login);
// // router.use(sellerController.authorize)

// router.route("/").get(sellerController.getAllSellers);
// router.route("/:id").get(sellerController.getSeller)
module.exports=router;