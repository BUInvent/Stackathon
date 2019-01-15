const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Review = require('./review')
const Order = require('./order')
const Tag = require('./tag')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Order)
Order.belongsTo(User)
//Order.hasMany(Product)
//Product.belongsToMany(Order, {through: 'OrderProduct'})
Review.belongsTo(User)
Review.belongsTo(Product)
User.hasMany(Review)
Product.hasMany(Review)
Product.belongsTo(Category)
Category.hasMany(Product)
Product.belongsToMany(Tag, {through: 'productTags'})
Tag.belongsToMany(Product, {through: 'productTags'})

module.exports = {
  User,
  Product,
  Category,
  Review,
  Order
}
