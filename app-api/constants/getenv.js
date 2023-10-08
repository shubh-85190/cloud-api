require('dotenv').config()
console.log(process.env.PORT);

PORT = ()=>{
    console.log(`process.env.PORT : ${process.env.PORT}`);
    return process.env.PORT};
DBNAME = ()=>{
    console.log(`process.env.DBNAME : ${process.env.DBNAME}`);
    return process.env.DBNAME};
DB_USERNAME = ()=>{
    console.log(`process.env.DB_USERNAME : ${process.env.DB_USERNAME}`);
    return process.env.DB_USERNAME};
DB_CLUSTER = ()=>{
    console.log(`process.env.DB_CLUSTER : ${process.env.DB_CLUSTER}`);
    return process.env.DB_CLUSTER};
DB_PASSWORD = ()=>{
    console.log(`process.env.DB_PASSWORD : ${process.env.DB_PASSWORD}`);
    return process.env.DB_PASSWORD};
SECRET_KEY = ()=>{
    console.log(`process.env.SECRET_KEY : ${process.env.SECRET_KEY}`);
    return process.env.SECRET_KEY};

module.exports = {PORT,DBNAME,DB_CLUSTER,DB_PASSWORD,DB_USERNAME};