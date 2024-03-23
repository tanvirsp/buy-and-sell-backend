const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name: {type: String, unique: true, required: true },
    slug: {type: String, required: true },
    des: {type: String},
    image: {type: String, required: true},
   
 

}, {timestamps:true, versionKey:false})







const CategoryModel = mongoose.model("categories",dataSchema );

module.exports = CategoryModel