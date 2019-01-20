const User = require('./user')
const Routine = require('./routine')
const Exercise = require('./exercise')
const WorkoutHistory = require('./workouthistory')

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

User.hasMany(Routine)
Routine.belongsTo(User)

Routine.hasMany(Exercise)
Exercise.belongsTo(Routine)

User.hasMany(WorkoutHistory)
WorkoutHistory.belongsTo(User)

Routine.hasMany(WorkoutHistory)
WorkoutHistory.belongsTo(Routine)

module.exports = {
  User,
  Routine,
  Exercise,
  WorkoutHistory
}
