const projects = require('../models/projectModel')

// add project

exports.addProjectController = async (req,res)=>{
    console.log("inside addProjectController");
    const userId =  req.userId


    // console.log(userId);
    // console.log(req.body);
    // console.log(req.file);
    const {title,languages,overview,github,website} = req.body
    const projectImage = req.file.filename
    try{
        const existingProject = await projects.findOne({github})
        if(existingProject){
            res.status(406).json("Projetct Already exists... Please upload another!!!")
        }else{
            const newProject = new projects({
                title,languages,overview,github,website,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }catch(err){
        res.status(401).json(err)
    }
    

   
    
}

// get home projects - guest user

exports.getHomeProjectsContoller = async (req,res)=>{
    console.log("inside getHomeProjectsContoller");
    try{
        const allHomeProjects = await projects.find().limit(3)
        res.status(200).json(allHomeProjects)
    }catch(err){
        res.status(401).json(err)
    }
    
}

// get user projects - authorised user

exports.getUserProjectsContoller = async (req,res)=>{
    console.log("inside getUserProjectsContoller");
    const userId = req.userId
    try{
        const allUserProjects = await projects.find({userId})
        res.status(200).json(allUserProjects)
    }catch(err){
        res.status(401).json(err)
    }
    
}

// get all projects - auhrorised user

exports.getAllProjectsContoller = async (req,res)=>{
    console.log("inside getAllProjectsContoller");
    try{
        const allProjects = await projects.find()
        res.status(200).json(allProjects)
    }catch(err){
        res.status(401).json(err)
    }
    
}