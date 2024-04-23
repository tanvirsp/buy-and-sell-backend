const express = require('express');
const router = express.Router()

const upload = require('../middleware/uploader');
const AuthVerification = require('../middleware/AuthVerification');

const UserController = require("../controllers/UserController");
const CategoryController = require("../controllers/CategoryController");
const AdController = require("../controllers/AdController");
const QuestionController = require("../controllers/QuestionController");
const AnswerController = require("../controllers/AnswerController");
const VerifyAdmin = require('../middleware/VerifyAdmin');




//image upload
router.post("/file-upload", upload.single('image'),  async(req, res) =>{
    try {
        
      res.status(200).send({status: true, data: req.file});
    } catch (error) {
        res.status(400).send({status: false,  message: error.message})
        
    }
  
  });

  

  
//Multi image upload
router.post("/file-upload-all", upload.array('image', 5),  async(req, res) =>{
  try {
    res.status(200).send({status: true, data: req.files});
  } catch (error) {
      res.status(400).send({status: false,  message: error.message})
      
  }

});



  
  //Category API

  router.post('/category', CategoryController.AddCategory);
  router.get('/categories', CategoryController.Categories);
  router.delete('/category/:id', CategoryController.DeleteCategory);
  router.post('/category/:id', CategoryController.UpdateCategory);
  router.get('/category/:id', CategoryController.ViewCategory);



//Ad API
router.post('/ad', AuthVerification,  AdController.CreateAd );
router.get('/ad/:id', AdController.ViewAd );
router.get('/ads', AdController.AllAds );
router.get('/my-ads', AuthVerification, AdController.MyAds );
router.delete('/ad/:id', AdController.DeleteAd );
router.post('/update-ad/:id', AuthVerification, AdController.UpdateAd );
router.get('/ad-by-category/:categoryID', AdController.AdByCategory );



//User API
router.post('/register', UserController.RegisterUser);
router.post('/login', UserController.LoginUser);
router.get('/logout', UserController.LogoutUser);

router.get("/send-otp/:email", UserController.SendOtp )
router.get("/verify-otp/:email/:otp", UserController.VerifyOTP );

router.post("/reset-password", AuthVerification, UserController.ResetPassword );
router.post("/change-password", AuthVerification, UserController.ChangePassword );


router.get("/profile", AuthVerification,  UserController.Profile );
router.post("/profile", AuthVerification, UserController.ProfileUpdate );



//Question API
router.post("/question", AuthVerification, VerifyAdmin, QuestionController.AddQuestion );
router.delete("/question/:id", AuthVerification, QuestionController.DeleteQuestion );
router.post("/question/:id",AuthVerification, QuestionController.UpdateQuestion );
router.get("/question/:id", QuestionController.ViewQuestion );
router.get("/questions/:adID", QuestionController.ViewAdQuestion );




//Answer API
router.post("/answer", AuthVerification, AnswerController.AddAnswer );
router.delete("/answer/:id", AuthVerification, AnswerController.DeleteAnswer );
router.post("/answer/:id",AuthVerification, AnswerController.UpdateAnswer );



  


module.exports = router;