const Sequelize = require('sequelize')
const db = require('../db')

const Sets = db.define('sets', {
  weight: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  reps: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Sets
