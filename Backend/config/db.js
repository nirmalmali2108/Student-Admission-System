const mongoose=require("mongoose");
const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);

        console.log("Mongodb Connected Successfully");
    }catch(error){
        console.log("Mongodb Connection Error:",error.message);
        process.exit(1);
    }
    };
module.exports=connectdb;