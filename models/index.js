const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
})

Category.hasMany(Product, {
})

Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
})

Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
