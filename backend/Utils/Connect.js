const Mongoose = require("mongoose");

const connectDB = async () => {
    try{
        Mongoose.connect("mongodb://0.0.0.0:27017/")
        .then(()=>{console.log("MongoDB connected")})
       
    }
    catch(err){
        console.error("Error connecting to MongoDB:", err.message);

    }
}

module.exports = connectDB;