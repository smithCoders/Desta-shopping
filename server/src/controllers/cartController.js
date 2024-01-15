const Cart=require("../model/cartSchema");
const Product=require("../model/productSchema")
const User=require("../model/userModel")
const factory=require("./factoryHandler");
const catchAsync=require("../utils/catchAsync");
const AppError=require("../utils/AppError");
const redis=require("../cache/redisConfig")
exports.addtoCart=catchAsync(async(req,res,next)=>{
   const userId=req.user.id;
  
   const {productId,quantity}=req.body;
 const product=await  Product.findById(productId)
  if(!product){
    return next(new AppError("product not found",404))
  }
  if(quantity> product.stockQuantity){
    return next(new AppError("Insufficient  stock",400))
  }
const existingCartItem=await Cart.findOne({user:userId, product});
let cartItem;
if(existingCartItem){
    cartItem=existingCartItem;
    cartItem.quantity +=quantity
} else{
cartItem=new Cart({
    user:userId,
    product:productId,
    quantity
})
};
 await cartItem.save();
const user = await User.findById(userId);

if (!user) {
  return next(new AppError("User not found", 404));
}

user.cart.push(cartItem._id);
await user.save();
res.status(201).json({
    status:"sucess",
    message:"cart created sucessfully.",
    data:{cartItem}
})
});
exports.viewCart = catchAsync(async (req, res, next) => {
  const keyPrefix = "cart";
  const params = req.query;

  // Check if the data is cached.
  const cartCached = await redis.getCach(keyPrefix, params);

  // Return cached data if available.
  if (cartCached) {
    console.log("Data from cache");
    return res.status(200).json({
      status: "success",
      data: { cartCached },
    });
  }

  // If data isn't cached, fetch from MongoDB.
  const userId = req.user.id;
  const cartItem = await Cart.find({ user: userId });

  // Handle the case when the cart is empty.
if (!cartItem || cartItem.length === 0) {
  return next(new AppError("Cart is empty", 404));
}

  // Set data to Redis only if it's not an empty array.
  if (cartItem && cartItem.length > 0) {
    await redis.setCach(keyPrefix, params, cartItem);
  }


  console.log("Data from DB");
  res.status(200).json({
    status: "success",
    data: { cartItem },
  });
});

exports.updateQuantity=catchAsync(async(req,res,next)=>{
    const  cartId=req.params.cartId
    const {quantity}=req.body;
    const updateItem=await Cart.findByIdAndUpdate(cartId,{quantity},{
        new:true
    });
    if(!updateItem){
        return next(new AppError("item not found",404))
    }
    res.status(200).json({
        status:"sucess",
        message:"quantity update sucessfully",
        data:{updateItem} })
});
exports.removeCart=catchAsync(async(req,res,next)=>{
    // question, what we remove the product or   the  cart  Ite self.
    const cartId=req.params.cartId;
    const deletedCart=await Cart.findByIdAndDelete(cartId);
    if(!deletedCart){
        return next(new AppError("cart not found",404))
    }
res.status(204).json({
    status:"sucess",
   
})

})