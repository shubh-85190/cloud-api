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



exports.validateLoginData = async (email)=>{    
    try {
        await client.connect();
        const database = client.db(dbname);
        const collection = database.collection('users');
        try{
        const result = await collection.find({
            'email':email
        }).toArray();
        // console.log(result);
        return result;
      }
      catch(err)
      {
        console.log(err);
      }
      } 
      finally {
        await client.close();
      }
}

exports.checkDuplicateEmail = async (email)=>{    
  try {
      await client.connect();
      const database = client.db(dbname);
      const collection = database.collection('users');
      try{
      const result = await collection.find({
          'email':email
      }).toArray();
      // console.log(result);
      return result;
    }
    catch(err)
    {
      console.log(err);
    }
    } 
    finally {
      await client.close();
    }
}
exports.insertUser  = async (user)=>{
  try {
    await client.connect();
    const database = client.db(dbname);
    const collection = database.collection('users');
    const result  = await collection.insertOne(user);
    console.log(`Insert user Count : ${JSON.stringify(result)}}`);
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
