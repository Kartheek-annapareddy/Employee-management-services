const createConnection=require('../modal/connection');
const express=require('express');
const  route=express.Router();
const jwt=require('jsonwebtoken');
const secret_key='qwdfghoikjrxdfcgpolkjmnsedfcgvolkjmnesdfcgiokj'
const {ObjectId} =require('mongodb')


route.put('/updateuser',async(req,res)=>{
    var {id,name,email,phone,password}=req.body
    var token = req.headers.authorization.slice(7);
   
    jwt.verify(token,secret_key,async(error,decode)=>{
        if(error){
            res.status(400).json({
                ok:false,
                message:'invalid token'
            })
        }
        console.log(decode);
        try{
            var collection =await createConnection();
            var data= await collection.updateOne({_id:new ObjectId(id)},{$set:{name:name,email:email,password:password,phone:phone}})
             console.log(data)
             if(data.modifiedCount===0){
                res.status(400).json({
                    ok:true,
                    message:'failed to update data'
                })
             }
             else{
                res.status(200).json({
                    ok:true,
                    message:'data ha been modified'
                })
             }
        }
        catch(error){
            res.status(500).json({
                ok:false,
                message:'internal error',
                error:error.message
            })
        }
    })
    

})

module.exports=route;