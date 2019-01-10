const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  text: {
    type: Sequelize.TEXT,
    validate: {
      len: {
        args: [10],
        msg: 'Review must be at least 10 characters'
      }
    }
  }
})

module.exports = Review
