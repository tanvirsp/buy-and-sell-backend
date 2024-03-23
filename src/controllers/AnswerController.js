const { AddAnswerService, DeleteAnswerService, UpdateAnswerService } = require("../services/AnswerServices")

exports.AddAnswer =async(req, res) =>{
    const result = await AddAnswerService(req)
    res.status(200).json(result)
}


exports.DeleteAnswer =async(req, res) =>{
    const result = await DeleteAnswerService(req)
    res.status(200).json(result)
}


exports.UpdateAnswer =async(req, res) =>{
    const result = await UpdateAnswerService(req)
    res.status(200).json(result)
}
