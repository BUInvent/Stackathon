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

    let weightIn = 0
    let repsIn = 0

    weightKeys.forEach(async function(key) {
      if (!Array.isArray(req.body[key])) req.body[key] = [req.body[key]]

      const exercise = await Exercise.findOne({
        where: {id: Number(key.slice(-1))}
      })

      for (let i = 0; i < req.body[key].length; i++) {
        if (req.body[key][i] === '') weightIn = 0
        else weightIn = req.body[key][i]
        if (req.body['reps exercise' + key.slice(-1)][i] === '')
          repsIn = 0
        else repsIn = req.body['reps exercise' + key.slice(-1)][i]

        const set = await Sets.create({
          weight: weightIn,
          reps: repsIn,
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

router.get('/:historyId', async (req, res, next) => {
  try {
    const sets = await Sets.findAll({
      where: {workouthistoryId: req.params.historyId},
      include: [Exercise]
    })

    res.json(sets)
  } catch (err) {
    next(err)
  }
})
