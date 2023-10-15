const express=require("express");
const cors=require('cors');
const app=express();
const getenv=require('./getenv');
const PORT = getenv.PORT;
app.use(cors());
const tokenRoute = require("./routes/token");
const userRoute = require("./routes/user");
const itemRoute = require("./routes/items");

app.use('/master/items',itemRoute);
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