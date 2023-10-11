const express=require("express");
// require('dotenv').config();
const cors=require('cors');
const app=express();
// const PORT=process.env.PORT;
const getenv=require('./getenv');
const PORT = getenv.PORT;
app.use(cors());
const tokenRoute = require("./routes/token");
const userRoute = require("./routes/user");

app.use('/token',tokenRoute);
app.use('/user',userRoute);

app.get("/",(req,res)=>{
    res.json({
        message:`Server is working...`,
    });
});

// const corsOption={
//     origin:'http://localhost:4200',
//     methods:'GET,POST',
//     credential:true,
//     optionsSuccessStatus:204,
//     'Access-Control-Allow-Credentials':true
// };

// app.use(cors(corsOption))




app.listen(PORT,'0.0.0.0',(request,response)=>{
    console.log(`Server is listening at port ${PORT}`);
})