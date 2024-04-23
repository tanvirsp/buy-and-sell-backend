const AdModel = require("../models/AdModel");
const CategoryModel = require("../models/CategoryModel");
const mongoose = require("mongoose");
const ObjectID= mongoose.Types.ObjectId;



//working on both Category and Sub-category
exports.AddCategoryService = async(req) =>{
    
    try {
        const reqBody = req.body;
      
        await CategoryModel.create(reqBody);
        return {status:"success", message:"Category Added Successfully"};    
        
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}




exports.CategoriesService = async(req) =>{
    try {
        // const data = await CategoryModel.find({});

        const matchStage = {  $match: { }   };
 


        const data = await CategoryModel.aggregate([
            matchStage,

        ])
     

        return {status:"success", data: data};
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}




exports.DeleteCategoryService = async(req) =>{

    try {
        const categoryID = new ObjectID(req.params.id)

        const data = await CategoryModel.deleteOne({_id: categoryID });
       
        return {status:"success", data: data};
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
};


exports.UpdateCategoryService = async(req) =>{

    try {
        const categoryID = new ObjectID(req.params.id)

        const data = await CategoryModel.updateOne({_id: categoryID }, {$set: req.body });
       
        return {status:"success", data: data};
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
};



exports.ViewCategoryService = async(req) =>{

    try {
        const categoryID = new ObjectID(req.params.id)
        const data = await CategoryModel.findOne({_id: categoryID });
       
        return {status:"success", data: data};
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
}