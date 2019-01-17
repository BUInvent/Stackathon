const Sequelize = require('sequelize')
const db = require('../db')

const WorkoutHistory = db.define('workouthistory', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = WorkoutHistory
