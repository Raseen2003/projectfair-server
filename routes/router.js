const express = require('express')
const userController = require('../controllers/userContoller')
const projectController  = require('../controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleWare = require('../middlewares/multerMiddleware')

const router = new express.Router()

// register - post
router.post('/register',userController.registerContoller)
// login
router.post('/login',userController.loginContoller)
// add-project - post 
router.post('/add-project',jwtMiddleware,multerMiddleWare.single('projectImage'), projectController.addProjectController)
// home-project - get 
router.get('/home-projects',projectController.getHomeProjectsContoller)
// user-project - get 
router.get('/user-projects',jwtMiddleware,projectController.getUserProjectsContoller)
// all-project - get 
router.get('/all-projects',jwtMiddleware,projectController.getAllProjectsContoller)
module.exports = router