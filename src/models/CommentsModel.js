const mongoose = require('mongoose');


const dataSchema = mongoose.Schema({
    comment: {type: String, required: true },
    newsId: {type: mongoose.Schema.Types.ObjectId, required: true },
    userId: {type: mongoose.Schema.Types.ObjectId, required: true}
 
   

}, {timestamps:true,versionKey:false})



const CommentsModel = mongoose.model("comments", dataSchema );

module.exports = CommentsModel
