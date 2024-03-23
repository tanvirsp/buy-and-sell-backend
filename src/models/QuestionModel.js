const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    question: {type: String, required: true},
    userID:{type:mongoose.Schema.Types.ObjectId, required:true },
    adID:{type:mongoose.Schema.Types.ObjectId, required:true},
   

}, {timestamps:true,versionKey:false})







const QuestionModel = mongoose.model("questions",dataSchema );

module.exports = QuestionModel