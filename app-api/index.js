const express=require("express");
const cors=require('cors');
const app=express();
const getenv=require('./getenv');
const PORT = getenv.PORT;
app.use(cors());
const tokenRoute = require("./routes/token");
const userRoute = require("./routes/user");
const itemRoute = require("./routes/items");
const masterRoute = require("./routes/master");
// const something = require('../app-ui/dist/app-ui')
const path=require('path');


app.use('/api/master/items',itemRoute);
app.use('/api/token',tokenRoute);
app.use('/api/user',userRoute);
app.use('/api/master',masterRoute);



app.use(express.static(path.join(__dirname,'../app-ui/dist/app-ui')));




app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../app-ui/dist/app-ui/index.html'));
    console.log('Inside aestrick.......');
})



app.get("/",(req,res)=>{
    res.render('index.html');
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