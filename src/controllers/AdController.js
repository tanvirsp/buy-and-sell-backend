const { CreateAdService, ViewAdService, AllAdsService, DeleteAdService, MyAdsService, UpdateAdService, AdByCategoryService, AdSearchService } = require("../services/AdServices")



exports.CreateAd =async(req, res)=>{
    const result = await CreateAdService(req)
    res.status(200).json(result)
}


exports.ViewAd =async(req, res)=>{
    const result = await ViewAdService(req)
    res.status(200).json(result)
}

exports.AllAds =async(req, res)=>{
    const result = await AllAdsService(req)
    res.status(200).json(result)
}


exports.MyAds =async(req, res)=>{
    const result = await MyAdsService(req)
    res.status(200).json(result)
}

exports.DeleteAd =async(req, res)=>{
    const result = await DeleteAdService(req)
    res.status(200).json(result)
}


exports.UpdateAd =async(req, res)=>{
    const result = await UpdateAdService(req)
    res.status(200).json(result)
}


exports.AdByCategory =async(req, res)=>{
    const result = await AdByCategoryService(req)
    res.status(200).json(result)
}


exports.AdSearch =async(req, res)=>{
    const result = await AdSearchService(req)
    res.status(200).json(result)
}