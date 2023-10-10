const dbconnection=require('./dbconnection')


exports.validateLoginData = async (data,client,dbname)=>{
    email=data.email;
    password=data.password;
    
    try {
        await client.connect();
        const database = client.database(dbname);
        const collection = database.collection('users');
        result = await collection.find({
            'email':email,
            'password':password
        });
        console.log(result);
        return result;
      } 
      finally {
        await client.close();
      }
}