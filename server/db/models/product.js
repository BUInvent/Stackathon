const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  shortDescription: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  longDescription: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: 'default-image.jpg'
  },
  availabe: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Product

const emptyInventory = product => {
  if (product.changed('inventoryQuantity')) {
    if (product.inventoryQuantity <= 0) {
      product.available = false
    }
  }
}

Product.beforeUpdate(emptyInventory)
