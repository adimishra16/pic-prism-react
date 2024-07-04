const express=require("express");
const dotenv=require('dotenv')
const app=express();


dotenv.config();
const port=process.env.PORT || 5000; 





app.get("/",(req,res)=>{
    resizeBy.send("<center><h1>Server Running....</h1></center>")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
