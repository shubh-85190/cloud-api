// const mongoose=require('mongoose');


// var user={
//     username:'shubh85190@gmail.com',
//     password:'Shubh@85190'
// }
// function checkUser(user)
// {


// }
// const getenv = require('../constants/getenv');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DBNAME;
const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db('DummyJSON').command({ping:1});
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
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
      return false;
    }
     finally {
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

exports = {insertOrder,insertMenuItem};
// run().catch(console.dir);