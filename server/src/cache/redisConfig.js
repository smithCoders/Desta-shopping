const Redis=require("ioredis")
const{promisify}=require("util")
const catchAsync=require("../utils/catchAsync");
const AppError=require("../utils/AppError");
// connect to redis server.
const client=new Redis({
    port:5002,
  
});
async function connectRedis(){
    try{
        if (client.status === 'connecting' || client.status === 'connect') {
            console.log('Redis is already connecting/connected');
            return;
        }
        await client.connect();
        console.log("redis connected")
    }catch(err){
        console.log(err)
        throw new Error("redis connection failed")
    }
}


//  promisify redis function (to use  async await  easly)
const getAsync=promisify(client.get).bind(client);
const setAsync=promisify(client.set).bind(client);
//  cach expires.(in 1hr)
const CATCH_EXPIRES_TIME=3600
// generate  cache keys.
const  generateCachKeys=(keyPrefix,params)=>{
    // create unique cachekey based on keyprefix and parameters.
    return `${keyPrefix}:${JSON.stringify(params)}`
}
// set data in the cach,
exports.setCach=async(keyPrefix,params,data)=>{
    const cachKey=generateCachKeys(keyPrefix,params);
    await setAsync(cachKey,JSON.stringify(data),"EX",CATCH_EXPIRES_TIME)

}
exports.getCach=async(keyPrefix,params)=>{
    const cachKey=generateCachKeys(keyPrefix,params);
    const cachedData=await getAsync(cachKey);
    return cachedData ? JSON.parse(cachedData):null
}
exports.deleteCach=async(keyPrefix,params)=>{
    const cachKey=generateCachKeys(keyPrefix,params);
    await client.del(cachKey)
}

// reconnection mechanism.
client.on("error",(err)=>{
    console.log(`redis error ${err}`)
    client.disconnect();
    // attempt to reconnect
    connectRedis()
})

module.exports={connectRedis,
    getCach:exports.getCach,
    setCach:exports.setCach,
    deleteCach:exports.deleteCach

}
