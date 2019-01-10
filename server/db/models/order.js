const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  destination: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Created',
    validate: {
      isIn: ['Created', 'Processing', 'Completed', 'Cancelled']
    }
  },
  price: {
    type: Sequelize.FLOAT
  }
})

module.exports = Order
