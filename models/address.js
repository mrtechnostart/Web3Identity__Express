const mongoose = require("mongoose")

const AddressSchema = new mongoose.Schema({
    deployer:{
        type:String,
        required:[true,"Must Provide Deployer Address"],
        trim:true,
        maxLength:[45,"Max Length Reached"]
    },
    contract:{
        type:String,
        required:[true,"Must Provide Deployer Address"],
        trim:true,
        maxLength:[45,"Max Length Reached"]
    },
    name:{
        type:String,
        required:[true,"Must Provide Name"],
        trim:true,
        maxLength:[40,"Max Length Reached"]
    }
})

module.exports = mongoose.model("Addr",AddressSchema)
