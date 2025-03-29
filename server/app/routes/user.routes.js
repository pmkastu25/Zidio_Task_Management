const express = require('express');
const { userLogin, userRegister } = require('../controllers/user.cltr');
const router = express.Router();

//register
router.post("/register",userRegister)
//login
router.post("/login",userLogin)
//forgot

module.exports = router