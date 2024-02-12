const multer=require("multer");
const sharp=require("sharp");
const AppError=require("./AppError");
// multer storage.
const multerStorage=multer.memoryStorage();
// filter only the uploaded image.
const multerFilter=(req,file,cb)=>{
  if(file.mimetype.startsWith("image")){
    cb(null,true)
  }else{
    cb(new AppError("Not an image! Please upload only images.",400),false)
  }
}
const upload=multer({
    storage:multerStorage,
    fileFilter:multerFilter
    })
exports.uploadImg=upload.single("image");
// resize user photo.
exports.resizeUserPhoto=async(req,res,next)=>{
    if(!req.file){
        return next();
    }
    req.file.filename=`user-${req.user.id}-${Date.now()}.jpeg`;
    await sharp(req.file.buffer)
    .resize(500,500)
    .toFormat("jpeg")
    .jpeg({quality:90})
    .toFile(`uploads/${req.file.filename}`);
    next();
    }
