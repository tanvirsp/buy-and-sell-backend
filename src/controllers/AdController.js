const { CreateAdService, ViewAdService, AllAdsService, DeleteAdService } = require("../services/AdServices")



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

exports.DeleteAd =async(req, res)=>{
    const result = await DeleteAdService(req)
    res.status(200).json(result)
}