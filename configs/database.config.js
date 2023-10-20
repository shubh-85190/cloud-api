const {connect,ConnectOptions} = require('mongoose');

const getenv = require('../getenv');

const username = encodeURIComponent(getenv.DB_USERNAME);
const password = encodeURIComponent(getenv.DB_PASSWORD);
const cluster = getenv.DB_CLUSTER;
const dbname = getenv.DBNAME;

const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`;

exports.dbconnect = async ()=>{
    await connect(uri).then(()=>console.log('connected successfully'),(error)=>console.log(error));
}
