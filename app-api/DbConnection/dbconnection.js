// const mongoose=require('mongoose');


// var user={
//     username:'shubh85190@gmail.com',
//     password:'Shubh@85190'
// }
// function checkUser(user)
// {


// }
// const getenv = require('../constants/getenv');
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
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// exports.client = client;

exports.getConnection=async()=>{
  try {
    // const client = new MongoClient(uri, options);
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

exports.getDBname = async ()=>{return dbname}

async function run() {
  try {
    await client.connect();
    await client.db('DummyJSON').command({ping:1});
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}


async function insertOrder(orderOBJ) {
    try {
      await client.connect();
      const database = client.db(dbname);
      const collection = database.collection('orders');
      const result  = await collection.insertOne(orderOBJ);
      console.log(`Insert user Count : ${result.insertedCount}`);
      if(result.insertedCount==1)
      {
        return 'success';
      }
      return;
    } finally {
      await client.close();
    }
  }
async function insertMenuItem(item) {
    try {
      await client.connect();
      const database = client.db(dbname);
      const collection = database.collection('menu');
      const result  = await collection.insertOne(item);
      console.log(`Insert user Count : ${result.insertedCount}`);
      if(result.insertedCount==1)
      {
        return 'success';
      }
      return;
    } finally {
      await client.close();
    }
  }

exports.validateLoginData = async (data)=>{
  const email=data.email;
  const userpassword=data.password;
  try {
    await client.connect();
    const database = client.db(dbname);
    const collection = database.collection('users');
    console.log({
      'email':email,
    });
    const result  = await collection.find({"email":"shubh85190@gmail.com"},(err,result)=>{
      if(err) console.log(err);
      console.log(result);
    });
    console.log('result sent');
    // console.log(result);
    return result;
    
  } finally {
    await client.close();
  }
}
exports = {insertOrder,insertMenuItem};
// module.exports={getConnection}
// run().catch(console.dir);  