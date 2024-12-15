const createConnection = require("../modal/connection");
const express=require('express');
const route=express.Router();

route.post('/login',async(req,res)=>{
    var {email,password}=req.body  
  try{
    if(!email||!password){
        res.status(400).json({
             ok:false,
             message:'the data is insufficient'
        })
    }
    else{
        var collection=await createConnection();
        var user= await collection.findOne({email:email})
         if(!user){
            res.status(200).json({
                ok:false,
                message:'email does not exist'
            })
         }else{
            if(user.password!=password){
               res.status(200).json({
                ok:false,
                message:'password is incorrect'
               })
            }
            else{
                res.status(200).json({
                    ok:true,
                    userdetails:user,
                    message:'login is succesfull'
                })
            }
         }
    }
}
catch (error){
   res.status(500).json({
    ok:false,
    message:'server error'
   })
}
})

module.exports=route;
