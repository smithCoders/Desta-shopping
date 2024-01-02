const catchAsync=require("../utils/catchAsync");
const AppError=require("../utils/AppError");
const redis=require("redis");
const redisURL="redis://127.0.0.1:6379"
const client=redis.createClient(redisURL);

// create-
exports.createOne=Model=>catchAsync(async(req,res,next)=>{
const doc=await Model.create(req.body);
res.status(201).json({
    status:"sucess",
    data:{doc}
})
});
// get-all.
exports.getAll=Model=>catchAsync(async(req,res,next)=>{
    // check if the data is found in the cache related to the query. 
    const doc=await Model.find();
    if(!doc){
        return next(new AppError("document not found",404))
    }
    res.status(200).json({
        result:doc.length,
        data:{doc}
    })
})
// get-one.
exports.getOne=Model=>catchAsync(async(req,res,next)=>{
    const doc=await Model.findOne(req.params?._id);
    if(!doc){
        return next(new AppError("document not found",404))
    }
    res.status(200).json({status:"sucess",data:{doc}})
})
// delete-one.
exports.deleteOne=Model=>catchAsync(async(req,res,next)=>{
    const doc=await Model.findByIdAndDelete(req.params?.id);
    if(!doc){
        return next(new AppError("document not found",404))
    }
    res.status(204).json({status:"sucess",data:null})
});
// update-one.
exports.updateOne=Model=>catchAsync(async(req,res,next)=>{
    const doc=await Model.findByIdAndUpdate(req.params?.id,req.body,{
        runValidators:true,
        new:true
    });
    if(!doc){
        return next(new AppError("document not found",404))
    }
    res.status(200).json({status:"sucess",data:{doc}})

})