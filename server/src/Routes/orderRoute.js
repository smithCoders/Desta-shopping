const express=require("express");
const userController=require("../controllers/userController");
const authController=require("../controllers/authController")
const orderController=require("../controllers/orderController");
const sellerController=require("../controllers/sellerController");
const router=express.Router();
// get order history.
router.use(authController.authorize);
router.route("/order-History").get(orderController.getOrderHistory)
router.route("/place-order").post(orderController.placeOrder)
router.route("/track-order/:orderId").get(orderController.trackOrderStatus)
router.route("/update-orderStatus/:orderId").patch(orderController.orderStatus)
module.exports=router;