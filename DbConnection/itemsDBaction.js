const getenv=require('../getenv');
const dbconnection = require('./dbconnection');

exports.insertItem  = async (item)=>{
    try {
      const database = await dbconnection.getConnection();
      const collection = database.collection('menu');
      const result  = await collection.insertOne(item);
      console.log(`Insert item Count : ${JSON.stringify(result)}`);
      if(result.acknowledged==true && result.insertedId)
      {
        return true;
      }
      return false;
    }
    catch(err){
      console.log(err);
      return false;
    }
}

exports.updateItem  = async (item)=>{
  try {
    const database = await dbconnection.getConnection();
    const collection = database.collection('menu');
    const filter={id:item.id};
    const update = {
      $set :{
        name:item.name,
        desc:item.desc,
        price:item.price,
        img:item.img,
        category:item.category,
        subcategory:item.subcategory
      }
    }
    const result  = await collection.updateOne(filter,update);
    console.log(`Update item Count : ${JSON.stringify(result.modifiedCount)}`);
    if(result.modifiedCount>0)
    {
      return true;
    }
    return false;
  }
  catch(err){
    console.log(err);
    return false;
  }
}


exports.viewItem  = async ()=>{
    try {
      const database = await dbconnection.getConnection();
      const collection = database.collection('menu');
      const result  = await collection.find().limit(20).toArray();
      console.log(`Items resturned Count : ${result.length}`);
      if(result.length > 0)
      {
        return result;
      }
      return false;
    }
    catch(err){
      console.log(err);
      return false;
    }
}

exports.getId = async ()=>{
    try {
        // await client.connect();
        const database = await dbconnection.getConnection();
        console.log(database);
        const collection = database.collection('menu');
        const result  = await collection.countDocuments();
        console.log(`Count of records : ${result}`);
        if(result)
        {
          return `100${result+1}`;
        }
        return false;
      }
      catch(err){
        console.log(err);
        return false;
      }
}


















