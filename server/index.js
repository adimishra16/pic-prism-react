const express=require("express");
const dotenv=require('dotenv')
const app=express();
const {readdirSync}=require('fs')
const { connectDb } = require("./connection");


dotenv.config();
const port=process.env.PORT || 5000; 
connectDb();


const authRoute=require("./routes/authRoutes");



app.get("/",(req,res)=>{
    resizeBy.send("<center><h1>Server Running....</h1></center>")
})

app.use("/",authRoute);

readdirSync("./routes").map((route) =>
    app.use("/api", require(`./routes/${route}`))
  );

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
