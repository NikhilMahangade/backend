const express=require('express')
require('dotenv').config()

const app=express()
// const port=3000;

app.get('/',(req,res)=>{
    res.send("hello sir")
})

app.listen(process.env.port,()=>{
    console.log(`listening on port ${port}`);
})