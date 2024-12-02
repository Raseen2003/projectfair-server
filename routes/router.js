const express = require('express')
const userController = require('../controllers/userContoller')

const router = new express.Router()

// register - post
router.post('/register',userController.registerContoller)

module.exports = router