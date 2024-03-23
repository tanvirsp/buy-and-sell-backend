const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({

    userID:{type:mongoose.Schema.Types.ObjectId, required:true },
    questionID:{type:mongoose.Schema.Types.ObjectId, required:true },
    answer: {type: String, required: true}
   


}, {timestamps:true, versionKey:false})







const AnswerModel = mongoose.model("answers",dataSchema );

module.exports = AnswerModel