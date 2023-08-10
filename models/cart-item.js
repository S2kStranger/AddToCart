const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const CartItem = sequelize.define('cartItem', {
  id : {
    type : Sequelize.INTEGER,
    autoIncrement : true,
    allowNULL : false,
    primaryKey : true
  }
});

module.exports = CartItem;