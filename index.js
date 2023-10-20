const express=require("express");
const cors=require('cors');
const app=express();
const getenv=require('./getenv');
const PORT = getenv.PORT;
app.use(cors());
const tokenRouter = require("./routes/token.router");
const userRouter = require("./routes/user.router");
const itemRouter = require("./routes/items.router");
const masterRouter = require("./routes/master.router");
const ordersRouter = require('./routes/orders.router');
// const something = require('./dist/app-ui')
const path=require('path');

const {dbconnect} = require('./configs/database.config');
dbconnect();
app.use('/api/master/items',itemRouter);
app.use('/api/token',tokenRouter);
app.use('/api/user',userRouter);
app.use('/api/master',masterRouter);
app.use('/api/orders',ordersRouter);




app.use(express.static(path.join(__dirname,'./dist/app-ui')));




app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./dist/app-ui/index.html'));
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
