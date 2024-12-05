const users = require('../models/userModel')
const jwt = require('jsonwebtoken')
// register


exports.registerContoller = async (req,res)=>{
    console.log("inside registerContoller");
    const {username,email,password} = req.body
    console.log(username,email,password);
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Users already exist.... please login !!!")

        }else{
            const newUser = new users({
                username,email,password,github:"",linkedin:"",profilePic:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
    
   
    
}

// login
exports.loginContoller = async (req,res)=>{
    console.log("inside loginContoller");
    const {email,password} = req.body
    console.log(email,password);
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            // token generate
            const token = jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
            res.status(200).json({
                user:existingUser,
                token
            })

        }else{
          
            res.status(404).json("Invalid E mail/ Password")
        }
    }catch(err){
        res.status(401).json(err)
    }
    
   
    
}
  
// Profile updation