const getenv=require('../getenv');
const { MongoClient, ServerApiVersion } = require('mongodb');
const username = encodeURIComponent(getenv.DB_USERNAME);
const password = encodeURIComponent(getenv.DB_PASSWORD);
const cluster = getenv.DB_CLUSTER;
const dbname = getenv.DBNAME;
const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


exports.insertItem  = async (item)=>{
    try {
      await client.connect();
      const database = client.db(dbname);
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
     finally {
      await client.close();
    }
}

exports.viewItem  = async ()=>{
    try {
      await client.connect();
      const database = client.db(dbname);
      const collection = database.collection('menu');
      const result  = await collection.find().limit(20).toArray();
      console.log(`Items resturned Count : ${result.length}`);
      if(result.acknowledged==true && result.length>0)
      {
        return true;
      }
      return false;
    }
    catch(err){
      console.log(err);
      return false;
    }
     finally {
      await client.close();
    }
}

exports.getId = async ()=>{
    try {
        await client.connect();
        const database = client.db(dbname);
        const collection = database.collection('menu');
        const result  = await collection.countDocuments();
        console.log(`Count of records : ${JSON.stringify(result)}`);
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
       finally {
        await client.close();
      }
}


















