const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Cart = sequelize.define('cart', {
  id : {
    type : Sequelize.INTEGER,
    autoIncrement : true,
    allowNULL : false,
    primaryKey : true
  }
});

module.exports = Cart;