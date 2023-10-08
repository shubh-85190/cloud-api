const express=require("express");
require('dotenv').config();

const app=express();
const PORT=process.env.PORT;

const tokenRoute = require("./routes/token");
const userRoute = require("./routes/user");

app.use('/token',tokenRoute);
app.use('/user',userRoute);

app.get("/",(req,res)=>{
    res.json({
        message:`Server is working...`,
    });
});




app.listen(PORT,(request,response)=>{
    console.log(`Server is listening at port ${PORT}`);
})