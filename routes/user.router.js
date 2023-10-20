
const express = require("express");
const router = express.Router();
const userController=require('../controller/userController');
const token=require('../controller/token');
const { adduser_c } = require("../controller/adduser.controller");
const { login_c } = require("../controller/login.controller");
router.use(express.json());



router.post('/adduser',async (req,res)=>{
    const data=req.body;
    const result = await adduser_c(data);
    res.json(result);
    // userController.adduser(req,res,data);
})
router.post('/login',async (req,res)=>{
    const data=req.body;
    const result = await login_c(data);
    res.json(result);
    // userController.login(req,res,data);
})



// router.post('/')

module.exports = router;