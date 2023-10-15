const express = require('express');
const router = express.Router();
const itemsController=require('../controller/itemsController');
router.use(express.json());

router.post('/additem',(req,res)=>{
    itemsController.addItem(req.body,res);
});

router.get('/getid',(req,res)=>{
    itemsController.getId(req.body,res);
});

router.post('/removeitem',(req,res)=>{
    itemsController.removeItem(req.body,res);
});

router.post('/updateitem',(req,res)=>{
    itemsController.updateItem(req.body,res);
});

router.post('/viewitem',(req,res)=>{
    itemsController.viewItems(req.body,res);
});



module.exports = router;