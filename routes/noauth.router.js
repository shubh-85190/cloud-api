const express = require("express");
const router = express.Router();
const itemsSchema = require('../models/items.model');
router.use(express.json());

router.get('/viewitem',async (req,res)=>{
    // itemsController.viewItems(req.body,res);
    console.log('viewitems.....');
    const result = await itemsSchema.find({'status':true});
    // console.log(result);
    res.json({
        status:'success',
        error:false,
        message:result});
});

module.exports = router;