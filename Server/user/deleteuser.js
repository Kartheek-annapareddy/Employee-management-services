const createConnection=require('../modal/connection');
const jwt=require('jsonwebtoken');
const express=require('express');
const route=express.Router();
const secret_key='qwdfghoikjrxdfcgpolkjmnsedfcgvolkjmnesdfcgiokj'
const {ObjectId} =require('mongodb')

route.delete('/deleteuser',async(req,res)=>{
    var {id}=req.body
    const token=req.headers.authorization.slice(7)

    jwt.verify(token,secret_key,async(error,decode)=>{
        if(error){
            res.status(400).json({
                ok:false,
                message:'invalid token'
            })
        }
        console.log(decode)
        var collection=await createConnection();
        var data = await collection.deleteOne({_id:new ObjectId(id)})
        console.log(data)
        if(deletedCount===0){
            res.status(400).json({
                ok:false,
                message:'failed to delete the data'
            })
        }
        else{
            res.status(400).json({
                ok:true,
            })
        }
    })
})

module.exports=route;