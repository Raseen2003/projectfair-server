const projects = require('../models/projectModel')

// add project

exports.addProjectController = async (req,res)=>{
    console.log("inside addProjectContoller");
    const userId =  req.userId


    console.log(userId);
    console.log(req.body);
    console.log(req.file);
    
    

    res.status(200).json("Add project request recieved!!!")
    
}