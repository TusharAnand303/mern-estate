import express from 'express';

const app = express();

const PORT = 8080;

app.get('/',(req,res)=>{
    res.json({
        message:"API working",
        success: true
    })
})

app.listen(PORT,()=>{
    console.log("http://localhost:8080")
})