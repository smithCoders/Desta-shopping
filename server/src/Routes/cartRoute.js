const express=require("express");
const userController=require("../controllers/userController");
const cartController=require("../controllers/cartController");
const router=express.Router();
router.use(userController.authorize)
router.route("/add-to-cart").post(cartController.addtoCart)
router.route("/my-cart").get(cartController.viewCart)
router.route("/update-quantity/:cartId").patch(cartController.updateQuantity)
router.route("/delete-cart/:cartId").delete(cartController.removeCart)
module.exports=router;