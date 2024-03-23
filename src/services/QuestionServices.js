const QuestionModel = require("../models/QuestionModel");
const mongoose = require("mongoose");
const ObjectID= mongoose.Types.ObjectId;


exports.AddQuestionService = async(req) =>{
    
    try {
        const reqBody = req.body;
      
        await QuestionModel.create(reqBody);
        return {status:"success", message:"Question Added Successfully"};    
        
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}


exports.DeleteQuestionService = async(req) =>{
    
    try {
        const id = new ObjectID(req.params.id)
        const data = await QuestionModel.deleteOne({_id: id});
       
        return {status:"success", data: data};
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}


exports.UpdateQuestionService = async(req) =>{
    
    try {
        const id = new ObjectID(req.params.id)
        const reqBody= req.body;
        const data = await QuestionModel.updateOne({_id: id}, {$set: reqBody});
       
        return {status:"success", data: data};
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}



exports.ViewAdQuestionService = async(req) =>{
    
    try {
        const adID = new ObjectID(req.params.adID);

        const matchingStage = {$match: {adID: adID }}
        const joiningAnswerStage = {$lookup: {from: "answers", localField: "_id", foreignField: "questionID", as: "answers"  }};

        const data = await QuestionModel.aggregate([
            matchingStage,
            joiningAnswerStage

        ])
       
        return {status:"success", data: data};
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}