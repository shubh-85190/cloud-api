const token=require('./token');
const itemsDbaction = require('../DbConnection/itemsDBaction');


exports.getId= async (reqbody,res)=>{
    result = await itemsDbaction.getId();
    if(result)
    {
        console.log(`Count Successful : ${result}`);
        res.json({
            status:'success',
            error:false,
            message: result
        });
    }
    else{
        res.json({
            status:'error',
            error:true,
            message:'Error in generating id'
        });
        return;
    }
}

exports.addItem = async (reqbody,res)=>{

    if(!reqbody.id || reqbody.id=='')
    {
        res.json({error:true,status:'success',message:'ID cannot be blank.'});
        return;    
    }
    if(!reqbody.name || reqbody.name=='')
    {
        res.json({error:true,status:'success',message:'Name cannot be blank.'});
        return;    
    }

    if(!reqbody.price || reqbody.price=='')
    {
        res.json({error:true,status:'success',message:'PRICE cannot be blank.'});
        return;    
    }

    if(!reqbody.desc || reqbody.desc=='')
    {
        res.json({error:true,status:'success',message:'Description cannot be blank.'});
        return;    
    }

    if(!reqbody.img || reqbody.img=='')
    {
        res.json({error:true,status:'success',message:'Image URL cannot be blank.'});
        return;    
    }

    if(!reqbody.category || reqbody.category=='')
    {
        res.json({error:true,status:'success',message:'Category URL cannot be blank.'});
        return;    
    }

    if(!reqbody.subcategory || reqbody.subcategory=='')
    {
        res.json({error:true,status:'success',message:'Sub-Catgory URL cannot be blank.'});
        return;    
    }
    item = {
        id:reqbody.id,
        name:reqbody.name,
        desc:reqbody.desc,
        price:reqbody.price,
        img:reqbody.img,
        category:reqbody.category,
        subcategory:reqbody.subcategory
    }
    result = await itemsDbaction.insertItem(item);
    if(result)
    {
        console.log(`Item Added Successfully`);
        res.json({
            status:'success',
            error:false,
            message: 'Item Added Successfully'
        });
    }
    else{
        res.json({
            status:'error',
            error:true,
            message:'Error in adding item'
        });
        return;
    }
    
}

exports.removeItem = async (reqbody,res)=>{
    res.json({error:false,status:'success',message:'item remove'});
    return;
}

exports.updateItem = async (reqbody,res)=>{
    res.json({error:false,status:'success',message:'item update'});
    return;
}

exports.viewItems = async (reqbody,res)=>{
    res.json({error:false,status:'success',message:'item view'});
    return;
}

