const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  ratings: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  fourSquareId: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Review.prototype.roundedReviews = function(rating) {
  return Math.floor(rating * 10) / 10
}

module.exports = Review
