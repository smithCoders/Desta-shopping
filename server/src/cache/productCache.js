const redisClient=require("./redisConfig");
const AppError=require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
 exports.getProductFromCach=catchAsync(async(productId)=>{
    const cachProduct=await redisClient.getAsync(`product:${productId}`);
    return cachProduct? JSON.parse(cachProduct):null;
 })