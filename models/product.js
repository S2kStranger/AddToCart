const db = require('../util/database.js');
module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {

    return db.execute('INSERT INTO products (title,price,description,imageURL) VALUES (?,?,?,?)', 
    [this.title,this.price,this.description,this.imageUrl]);
    
  }

  static update(prodId,updatedTitle,updatedPrice,updatedDesc,updatedImageUrl)
  {
      return db.execute('UPDATE products SET title=?, price=?, description=?, imageURL=? WHERE id=?' ,
      [updatedTitle,updatedPrice,updatedDesc,updatedImageUrl,prodId]);
  }

  static deleteById(id) {
    return db.execute('DELETE FROM products WHERE id=?',[id]);
  }

  static fetchAll(cb) {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    
    return db.execute('SELECT * FROM products WHERE products.id=?',[id]);
    
  }
};