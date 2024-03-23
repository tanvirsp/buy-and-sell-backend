const mongoose = require("mongoose");
const ObjectID= mongoose.Types.ObjectId;

const AdModel = require("../models/AdModel");

exports.CreateAdService = async(req) =>{
    
    try {
        const reqBody = req.body;
      
        await AdModel.create(reqBody);
        return {status:"success", message:"You have successfully post your AD"};    
        
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
};


exports.ViewAdService = async(req) =>{
    
    try {
        const id = new ObjectID(req.params.id);
        const matchStage = {$match: {_id: id}}
        const joiningCategoryStage = {$lookup: {from: "categories", localField: "categoryID", foreignField: "_id", as: "category"  }};
        const unWindStage = {$unwind: "$category"}

      
        const data = await AdModel.aggregate([
            matchStage,
            joiningCategoryStage, unWindStage

        ]);


        return {status:"success", data: data};    
        
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}


exports.AllAdsService = async(req) =>{
    
    try {
        
        const data = await AdModel.find({})

        return {status:"success", data: data};    
        
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
};



exports.DeleteAdService = async(req) =>{
    
    try {
        const id = new ObjectID(req.params.id);
        const data = await AdModel.deleteOne({_id: id})

        return {status:"success", data: data};    
        
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}
