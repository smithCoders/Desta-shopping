const Order=require("../model/orderSchema");
const catchAsync=require("../utils/catchAsync");
const AppError=require("../utils/AppError");
exports.placeOrder=catchAsync(async(req,res,next)=>{
    const {product,quantity,shippingAddress,shippingBill,totalPrice}=req.body;
    const userId=req.user.id;
    const createOrder=await Order.create({
        user:userId,
        product,
        quantity,
        shippingAddress,
        shippingBill,
        totalPrice,
        status:"processing"
    });
res.status(201).json({
    status:"sucess",
    data:createOrder
})
});
exports.getOrderHistory=catchAsync(async(req,res,next)=>{
    // get all orders created by the user
    const orders=await Order.find({user:req?.user?.id}).sort("-createdAt")
    if(!orders){
        return next(new AppError("order history not found",404))
    }
    res.status(200).json({
        status:"sucess",
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
        runValidators:true
    });
    if(!updateStatus){
        return next(new AppError("order not found",404))
    }
    res.status(200).json({
        status:"sucess",
        data:{updateStatus}
    })

})