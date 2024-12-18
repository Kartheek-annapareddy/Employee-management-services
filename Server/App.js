const express=require('express')
// const createConnection=require('./modal/connection')
const userlogin=require('./user/Auth')
const getusers=require('./user/getuser')
const getoneuser=require('./user/getoneuser')
const updateuser=require('./user/updateuser')
const deleteuser=require('./user/deleteuser')
var app=express()
const cors=require('cors')



app.use(cors())
app.use(express.json())


app.use('/auth',userlogin)

//http://locoalhost:7409/auth/login //to get login

app.use('/user',getusers)

//http://localhost:7409/user/getusers //get all users

app.use('/user',getoneuser)
//http://localhost:7409/user/getoneuser

app.use('/user',updateuser)

//http://localhost:7409/user/updateuser

app.use('/user',deleteuser)
//http://localhost:7409/user/deleteuser

app.listen(7409 ,(error)=>{
   if(error){
    console.log(error)
   }else{
    console.log('server is running')
   }
})
