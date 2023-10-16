
const express = require("express");
const router = express.Router();
const userController=require('../controller/userController');
const token=require('../controller/token');
router.use(express.json());



router.post('/adduser',async (req,res)=>{
    const data=req.body;
    userController.adduser(req,res,data);
})
router.post('/login',async (req,res)=>{
    const data=req.body;
    userController.login(req,res,data);
})



// router.post('/')

module.exports = router;