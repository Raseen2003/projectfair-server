// register

exports.registerContoller = (req,res)=>{
    console.log("inside registerContoller");
    const {username,email,password} = req.body
    console.log(username,email,password);
    
    res.status(200).json("Request recieved")
    
}

// login

// Profile updation