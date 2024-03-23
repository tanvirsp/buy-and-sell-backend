const { AddQuestionService, ViewQuestionsService, DeleteQuestionService, UpdateQuestionService } = require("../services/QuestionServices")


exports.AddQuestion =async(req, res) =>{
    const result = await AddQuestionService(req)
    res.status(200).json(result)
}


exports.DeleteQuestion =async(req, res) =>{
    const result = await DeleteQuestionService(req)
    res.status(200).json(result)
}


exports.UpdateQuestion =async(req, res) =>{
    const result = await UpdateQuestionService(req)
    res.status(200).json(result)
}
