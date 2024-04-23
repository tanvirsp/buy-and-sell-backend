const mongoose = require("mongoose");
const ObjectID= mongoose.Types.ObjectId;

const AdModel = require("../models/AdModel");

exports.CreateAdService = async(req) =>{
    
    try {

        const reqBody = req.body;
        reqBody.userID = req.headers.user_id
      
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
            joiningCategoryStage, unWindStage,
          
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


exports.MyAdsService = async(req) =>{
    
    try {
        const userID = new ObjectID(req.headers.user_id)
        const matchingStage = {$match: {userID: userID}};

        const projectStage = {$project: {categoryID: 0, userID: 0, price: 0, contactNumber: 0, 
            edition:0, district: 0, division: 0, upazilla:0, condition:0, negotiable: 0, brand:0, model: 0,
            description: 0, updatedAt: 0 }}

        const data = await AdModel.aggregate([
            matchingStage,
            projectStage
        ])

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


exports.UpdateAdService = async(req) =>{
    
    try {

        const reqBody = req.body;
        const id = new ObjectID(req.params.id)
        reqBody.userID = req.headers.user_id
        console.log(reqBody);
      
        const data = await AdModel.updateOne({_id: id}, {$set: reqBody});
        return {status:"success", data: data};    
        
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
};



exports.AdByCategoryService = async(req) =>{
    
    try {
        
        const categoryID = new ObjectID(req.params.categoryID)

        const matchingStage ={$match: {categoryID: categoryID}};
        const joiningCategoryStage = {$lookup: {from: "categories", localField: "categoryID", foreignField: "_id", as: "category"  }};
        const unWindStage = {$unwind: "$category"}
      
        const data = await AdModel.aggregate([
            matchingStage,
            joiningCategoryStage,
            unWindStage
        ]);
        return {status:"success", data: data};    
        
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
};

