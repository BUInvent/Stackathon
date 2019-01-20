const router = require('express').Router()
const {Exercise, Routine, Sets, WorkoutHistory, User} = require('../db/models')
module.exports = router

router.post('/:routineId/:userId', async (req, res, next) => {
  try {
    const workoutDate = await WorkoutHistory.create({
      date: new Date()
    })
    const routine = await Routine.findOne({where: {id: req.params.routineId}})
    const user = await User.findOne({where: {id: req.params.userId}})
    await workoutDate.setRoutine(routine)
    await workoutDate.setUser(user)

    let weightKeys = Object.keys(req.body).filter(function(k) {
      return k.indexOf('weight') === 0
    })

    weightKeys.forEach(async function(key) {
      if (!Array.isArray(req.body[key])) req.body[key] = [req.body[key]]

      const exercise = await Exercise.findOne({
        where: {id: Number(key.slice(-1))}
      })

      for (let i = 0; i < req.body[key].length; i++) {
        const set = await Sets.create({
          weight: req.body[key][i],
          reps: req.body['reps exercise' + key.slice(-1)][i],
          workouthistoryId: workoutDate.id
        })
        await set.setExercise(exercise)
      }
    })

    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
