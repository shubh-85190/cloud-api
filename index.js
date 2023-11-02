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
const statusRouter = require('./routes/status.router');
// const something = require('../app-ui/dist/app-ui')
const path=require('path');
const {verifyToken} = require('./routes/token.function');
const {dbconnect} = require('./configs/database.config');
const loginRouter = require('./routes/login.router');
const noauthRouter = require('./routes/noauth.router');
dbconnect();

app.use('/api/',noauthRouter);
app.use('/api/login',loginRouter);
app.use('/api/master',statusRouter);
app.use('/api/master/items',verifyHeader,itemRouter);
app.use('/api/token',tokenRouter);
app.use('/api/user',userRouter);

app.use('/api/master',verifyHeader,masterRouter);
app.use('/api/orders',ordersRouter);




app.use(express.static(path.join(__dirname,'../app-ui/dist/app-ui')));



const noauthpath =[
    '/','/mainapp','/viewcart','/default','/confirmorder','/master'
]
const authpath =[
    '/master/additems','/master/viewitems','/master/currentorders','/master/updateitem','/master/mainapp'
]
app.get('*',(req,res)=>{
    // console.log(req.headers.headers);
    res.sendFile(path.join(__dirname,'../app-ui/dist/app-ui/index.html'));
    console.log('Inside aestrick.......');
})

// app.get(authpath,async (req,res)=>{
//     console.log(req);
//     const authstatus = await verifyToken(req);
//     if(authstatus)
//     {
//         res.sendFile(path.join(__dirname,'../app-ui/dist/app-ui/index.html'));
//     }
//     else{
//         res.sendStatus(401);
//     }
//     console.log('Inside authpath.......');
// })

// const corsOption={
//     origin:'http://localhost:4200',
//     methods:'GET,POST',
//     credential:true,
//     optionsSuccessStatus:204,
//     'Access-Control-Allow-Credentials':true
// };

// app.use(cors(corsOption))


async function verifyHeader(req, res, next) {
    const authHeader = req.header('Authorization');
    console.log(authHeader);
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header is missing' });
    }
    const authstatus = await verifyToken(req);
    console.log(`AuthStatus : ${authstatus}`);
    if(authstatus){
        next()
    }
    else{
        return res.status(401).json({
            error:true,
            status:'success',
            message: 'Invalid token' });
    }
  }

app.listen(PORT,'0.0.0.0',(request,response)=>{
    console.log(`Server is listening at port ${PORT}`);
})