const createConnection=require('../modal/connection')
const express=require('express')
const route=express.Router()
const jwt=require('jsonwebtoken')
const secret_key='qwdfghoikjrxdfcgpolkjmnsedfcgvolkjmnesdfcgiokj'

route.get('/getusers',async(req,res)=>{
        var token=req.headers.authorization.slice(7)

        try{
       jwt.verify(token,secret_key,async(error,decode)=>{
        if(error){
            return res.status(400).json({
                ok:false,
                message:'invalid token'
            })
        }
        console.log(decode)

        const collection=await createConnection();
        var data= await collection.find().toArray();
        if(!data||data.length===0){
             return res.status(400).json({
                ok:false,
                message:'data base looks empty'
            })
        }
        else{
            console.log('data is sent to the client')
            return  res.status(200).json({
                ok:true,
                message:'data is sending.. ',
                users:data
            })
        }
       })}
       catch(error){
         return res.status(500).json({
            ok:false,
            message:'internal error',
            error:error.message
        })
       }
})

module.exports=route;