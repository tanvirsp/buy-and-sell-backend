const { AddCategoryService, DeleteCategoryService, UpdateCategoryService, CategoriesService, ViewCategoryService } = require("../services/CategoryServices")

exports.AddCategory =async(req, res) =>{
    const result = await AddCategoryService(req)
    res.status(200).json(result)
}



exports.Categories =async(req, res) =>{
    const result = await CategoriesService(req)
    res.status(200).json(result)
}


exports.ViewCategory =async(req, res) =>{
    const result = await ViewCategoryService(req)
    res.status(200).json(result)
}





exports.DeleteCategory =async(req, res) =>{
    const result = await DeleteCategoryService(req)
    res.status(200).json(result)
}


exports.UpdateCategory =async(req, res) =>{
    const result = await UpdateCategoryService(req)
    res.status(200).json(result)
}

