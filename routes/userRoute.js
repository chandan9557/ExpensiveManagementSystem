const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

//router ko expand krenge express ke help se
const router = express.Router();
//routes craeted krenge

//post || login user
router.post("/login", loginController); //ishke under ab ayega controller path jo post ke liye chahiye
//post || register user

router.post("/register", registerController);

module.exports = router;
