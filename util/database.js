const mysql=require('mysql2');

const pool= mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'node-complete',
    password : 'S2kMySQL'
});

module.exports=pool.promise();