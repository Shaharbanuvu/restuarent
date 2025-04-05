const express = require('express')
const  mongoose =require('mongoose')
const cors =require('cors');
const apiRouter = require('./Routes');
const cookieparser = require("cookie-parser")




const app=express()

app.use(express.json());
app.use(cookieparser())


mongoose.connect('mongodb+srv://shaharbanu0909:VPJ72icDD2OWRf6H@cluster2.1tqw7e4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2').then((res)=>{

    console.log("Database connected successfully");
}).catch((err)=>{
    console.log(err);
})

app.use('/api',apiRouter)

app.listen(3000,()=>{
    console.log("server start on port 4000");
})


//VPJ72icDD2OWRf6H