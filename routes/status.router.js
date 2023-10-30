const express = require('express');
const router = express.Router();
const statusSchema = require('../models/status.model');
const currentstatusSchema = require('../models/current.status.model');


router.use(express.json());
router.get('/getstatus',async (req,res)=>{
  const result = await currentstatusSchema.findOne({});
  console.log(result);
  res.json({
    error:false,
    status:'success',
    message:result
  });
})


router.post('/changestatus',async (req,res)=>{
    const body=req.body;
    console.log(body);
    const datetime=new Date("<YYYY-mm-ddTHH:MM:ss>");
    const result = await currentstatusSchema.updateOne({

    },{
      $set : {
        username:body.username,
        status : body.status,
        lastupdatedby: datetime
    }},
    {
        upsert:true
    }
    );
    await statusSchema.create({
        username:body.username,
        status:body.status
    });
    console.log(result);
    res.json({
        error:false,
        status:'success',
        message:result
    })


})


module.exports = router;