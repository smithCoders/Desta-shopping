const mongoose=require("mongoose");
const{Schema,model}=mongoose;
const  cartSchema=new Schema({
    user:{
    type:Schema.Types.ObjectId,
    ref:"User",
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
    type:Number,
    default:1
}
});
const Cart=model("Cart",cartSchema);
module.exports=Cart