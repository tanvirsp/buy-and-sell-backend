const { AddQuestionService, ViewQuestionsService, DeleteQuestionService, UpdateQuestionService, ViewQuestionService, ViewAdQuestionService } = require("../services/QuestionServices")


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

exports.ViewQuestion =async(req, res) =>{
    const result = await ViewQuestionService(req)
    res.status(200).json(result)
}



exports.ViewAdQuestion =async(req, res) =>{
    const result = await ViewAdQuestionService(req)
    res.status(200).json(result)
}
