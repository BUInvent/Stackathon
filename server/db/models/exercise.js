const Sequelize = require('sequelize')
const db = require('../db')

const Exercise = db.define('exercise', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  sets: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  reps: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Exercise
