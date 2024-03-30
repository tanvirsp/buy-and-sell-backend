const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name: {type: String, required: true },
    categoryID:{type:mongoose.Schema.Types.ObjectId, required: true },
    userID:{type:mongoose.Schema.Types.ObjectId, required: true },
    price:{type: String, required: true },
    contactNumber:{type: String, required: true },
    edition:{type: String, required: true },
    district:{type: String, required: true },
    division:{type: String, required: true },
    subDistrict:{type: String, required: true },
    condition:{type: String, required: true },
    negotiable:{type: String, required: true },
    brand:{type: String, required: true },
    model:{type: String, required: true },
    description:{type: String, required: true },
    image:{type: [String], required: true },
    status:{type: String, default: "pending" },
   
 

}, {timestamps:true, versionKey:false})







const AdModel = mongoose.model("ads",dataSchema );

module.exports = AdModel