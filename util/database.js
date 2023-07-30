const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','S2kMySQL',{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports=sequelize;