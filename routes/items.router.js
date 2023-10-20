const express = require('express');
const router = express.Router();
const itemsController=require('../controller/itemsController');
const itemsSchema = require('../models/items.model');

router.use(express.json());


router.post('/additem',async (req,res)=>{
    // itemsController.addItem(req.body,res);
    const body = req.body;
    console.log(body);
    const result =await itemsSchema.create(body);
    res.json({
        status:'success',
        error:false,
        message:result});
});

router.get('/getid',async (req,res)=>{
    // itemsController.getId(req.body,res);
    const result = await itemsSchema.countDocuments();
    res.json({
        status:'success',
        error:false,
        message:result+1001});
});

router.post('/removeitem',(req,res)=>{
    itemsController.removeItem(req.body,res);
});

router.post('/updateitem',(req,res)=>{
    itemsController.updateItem(req.body,res);
});

router.get('/viewitem',async (req,res)=>{
    // itemsController.viewItems(req.body,res);
    console.log('viewitems.....');
    const result = await itemsSchema.find({});
    res.json({
        status:'success',
        error:false,
        message:result});
});

module.exports = router;