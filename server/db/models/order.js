const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  destination: {
    type: Sequelize.STRING
  },
  orderStatus: {
    type: Sequelize.STRING,
    defaultValue: 'Created',
    validate: {
      isIn: [['Created', 'Placed', 'Processing', 'Completed', 'Cancelled']]
    }
  },
  contents: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  }
})

module.exports = Order
