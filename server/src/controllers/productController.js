const catchAsync=require("../utils/catchAsync");
const AppError=require("../utils/AppError");
const Product=require("../model/productSchema");
const factory=require("./factoryHandler");
const redis=require("redis");
const redisURL="redis://127.0.0.1:6379"
// const client=redis.createClient(redisURL);
const client = redis.createClient({
  legacyMode: true,
  PORT: 5001
})
client.connect().catch(console.error)

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (err) => {
  console.error('Redis Error:', err);
});

client.on('end', () => {
  console.log('Connection to Redis closed');
});


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
   const product= await Product.find();
      if(!product){
        return next(new AppError("product not found",404))
      }
      res.status(200).json({status:"sucess",data:{product}})
      
 



})
exports.getOneProduct=factory.getOne(Product);
exports.updateProduct=factory.updateOne(Product);
exports.deleteProduct=factory.deleteOne(Product);

