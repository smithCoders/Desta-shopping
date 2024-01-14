const Order=require("../model/orderSchema");
const User=require("../model/userModel");
const catchAsync=require("../utils/catchAsync");
const AppError=require("../utils/AppError");
const Product = require("../model/productSchema");
const checkProductAvailability = catchAsync(async (products) => {
  const unavailableProduct = [];
  for (const product of products) {
    const { productId, quantity } = product;
    // Check if the product exists and has enough quantity.
    const existingProduct = await Product.findById(productId);
    if (!existingProduct || existingProduct.quantity < quantity) {
      unavailableProduct.push(existingProduct ? existingProduct.name : "unknown product");
    }
  }
  return unavailableProduct;
});

exports.placeOrder = catchAsync(async (req, res, next) => {
  const { products, shippingAddress, totalPrice } = req.body;
  const userId = req.user.id;

  // Before creating product check if it is available.
  const unavailableProduct = await checkProductAvailability(products);
  console.log("unavailable:", unavailableProduct);
  if (unavailableProduct?.length > 0) {
    return next(new AppError(`The following product isn't available ${unavailableProduct.join(", ")}`, 404));
  }

  const createOrder = await Order.create({
    user: userId,
    product: products[0].productId, 
    quantity: products[0].quantity, 
    shippingAddress,
    totalPrice,
    status: "processing"
  });

  // push it to userModel.
  const user=await User.findById(userId);
  user.order.push(createOrder._id);
  await user.save()

  res.status(201).json({
    status: "success",
    data: createOrder
  });
});

exports.getOrderHistory=catchAsync(async(req,res,next)=>{
    // get all orders created by the user
    const orders=await Order.find({user:req?.user?.id}).sort("-createdAt")
    if(!orders){
        return next(new AppError("order history not found",404))
    }
    res.status(200).json({
        status:"sucess",
        result:orders.length,
        data:{orders}
    })

});
exports.trackOrderStatus=catchAsync(async(req,res,next)=>{
    const orderId=req.params.orderId;
    const order=await Order.findById(orderId);
   
    if(!order){
        return next(new AppError("order not found",404))
    }
    res.status(200).json({
        status:"sucess",
        data:{order}

    })

});
// change order status.
exports.orderStatus=catchAsync(async(req,res,next)=>{
    const{orderId,status}=req.body;
    // check if the newStatus is valid.
    if(!['pending', 'shipped', 'delivered',"processing"].includes(status)){
return next(new AppError("Invalid status",400))
    }
    const updateStatus=await Order.findByIdAndUpdate(orderId,{status},{
        new:true,
      
    });
    if(!updateStatus){
        return next(new AppError("order not found",404))
    }
    res.status(200).json({
        status:"sucess",
        data:{updateStatus}
    })

})