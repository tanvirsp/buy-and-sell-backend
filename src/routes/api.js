const express = require('express');
const router = express.Router()

const upload = require('../middleware/uploader');
const AuthVerification = require('../middleware/AuthVerification');

const UserController = require("../controllers/UserController");
const CategoryController = require("../controllers/CategoryController");
const AdController = require("../controllers/AdController");
const QuestionController = require("../controllers/QuestionController");




//image upload
router.post("/file-upload", upload.single('image'),  async(req, res) =>{
    try {
        
      res.status(200).send({status: true, data: req.file});
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
router.post('/ad', AdController.CreateAd );
router.get('/ad/:id', AdController.ViewAd );
router.get('/ads', AdController.AllAds );
router.delete('/ad/:id', AdController.DeleteAd );


//User API
router.post('/register', UserController.RegisterUser);
router.post('/login', UserController.LoginUser);
router.get('/logout', UserController.LogoutUser);

router.get("/send-otp/:email", UserController.SendOtp )
router.get("/verify-otp/:email/:otp", UserController.VerifyOTP );
router.post("/reset-password", UserController.ResetPassword );
router.post("/change-password", AuthVerification, UserController.ChangePassword );


router.get("/profile", AuthVerification, UserController.Profile );
router.post("/profile", AuthVerification, UserController.ProfileUpdate );



//Question API
router.post("/question", AuthVerification, QuestionController.AddQuestion );
router.delete("/question/:id", QuestionController.DeleteQuestion );
router.post("/question/:id", QuestionController.UpdateQuestion );



  


module.exports = router;