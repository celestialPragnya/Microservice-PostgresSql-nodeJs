const express = require('express');
const router = express.Router();
const userController = require('../controller/users');

router.post("/SignIn",userController.SignIn);
router.post("/SignUp",userController.SignUp);


module.exports = router;