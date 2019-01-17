const Sequelize = require('sequelize')
const db = require('../db')

const Routine = db.define('routine', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Routine
