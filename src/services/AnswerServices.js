const AnswerModel = require("../models/AnswerModel");
const mongoose = require("mongoose");
const ObjectID= mongoose.Types.ObjectId;


exports.AddAnswerService = async(req) =>{
    
    try {
        const reqBody = req.body;
      
        await AnswerModel.create(reqBody);
        return {status:"success", message:"Answer Added Successfully"};    
        
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}


exports.DeleteAnswerService = async(req) =>{
    
    try {
        const id = new ObjectID(req.params.id)
        const data = await AnswerModel.deleteOne({_id: id});
       
        return {status:"success", data: data};
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}


exports.UpdateAnswerService = async(req) =>{
    
    try {
        const id = new ObjectID(req.params.id)
        const reqBody= req.body;
        const data = await AnswerModel.updateOne({_id: id}, {$set: reqBody});
       
        return {status:"success", data: data};
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}