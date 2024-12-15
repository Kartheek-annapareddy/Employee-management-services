const express=require('express')
// const createConnection=require('./modal/connection')
const userlogin=require('./user/Auth')
var app=express()
const cors=require('cors')



app.use(cors())
app.use(express.json())


app.use('/auth',userlogin)

//http://locoalhost:7409/Auth/login

app.listen(7409 ,(error)=>{
   if(error){
    console.log(error)
   }else{
    console.log('server is running')
   }
})
