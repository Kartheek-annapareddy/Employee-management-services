const createConnection=require('../modal/connection');
const express=require('express');
const route=express.Router();
const jwt=require('jsonwebtoken')
const secret_key='qwdfghoikjrxdfcgpolkjmnsedfcgvolkjmnesdfcgiokj'
const {ObjectId} =require('mongodb')

route.get('/getoneuser',async(req,res)=>{
    var {id}=req.body;
    var token=req.headers.authorization.slice(7)

    jwt.verify(token,secret_key,async(error,decode)=>{
        if(error){
            res.status(400).json({
                ok:false,
                message:'invalid token'
            })
        }
        // console.log({data:decode})
         try{
        const collection=await createConnection();
        const data=await collection.findOne({_id:new ObjectId(id)})
         console.log(data)
        if(!data||data.length===0){
            res.status(400).json({
                ok:false,
                message:'not data match with the id'
            })
        }
        else{
            res.status(200).json({
                ok:true,
                message:'data is fetching',
                user:data
            })

        }
    }catch(error){
        res.status(500).json({
            ok:false,
            message:'internal error',
            error:error.message
        })
    }
    })

})

module.exports=route;