const catchAsync=require("../utils/catchAsync");
const AppError=require("../utils/AppError");
const Product=require("../model/productSchema");
const factory=require("./factoryHandler");
const redis=require("../cache/redisConfig");
exports.fullTextSearch = catchAsync(async (req, res, next) => {
  const { query } = req.params;
//  Remove stop words from the query before searching:
const stopWords = ['the', 'and', 'of', /* ... */];
const filteredQuery = query.split(/\s+/).filter(word => !stopWords.includes(word)).join(' ');
const result = await Product.find({ $text: { $search: filteredQuery } });

  if (result.length === 0) {
    return res.status(404).json({
      status: "failed",
      message: "No products found matching the search query."
    });
  }

  res.status(200).json({
    status: "success",
    data: { result }
  });
});
exports.AddProduct=factory.createOne(Product);
// exports.getAllProduct=factory.getAll(Product);
exports.getAllProducts=catchAsync(async(req,res,next)=>{
 const keyPrefix="products";
 const params=req.query;
  // check if data is cached.
  const cachProduct=await redis.getCach(keyPrefix,params)
// return cach data.
if(cachProduct){
  console.log("from cach")
  return res.status(200).json({status:"sucess",data:{cachProduct}})
}
// if no cached data , fetch from DB
   const product= await Product.find();
  //  set it to cach.
  await redis.setCach(keyPrefix,params,product)
      if(!product){
        return next(new AppError("product not found",404))
      }
      console.log("from DB")
      res.status(200).json({status:"sucess",data:{product}})

})
exports.getOneProduct=factory.getOne(Product);
exports.updateProduct=factory.updateOne(Product);
exports.deleteProduct=factory.deleteOne(Product);

