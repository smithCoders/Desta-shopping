const redis=require("redis");
const util=require("util");
const client=redis.createClient();
//  promisify redis function (to use  async await  easly)
 client.getAsync=util.promisify(client.get).bind(client);
 client.setAsync=util.promisify(client.set).bind(client)
 module.exports=client
