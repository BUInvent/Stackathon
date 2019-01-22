const router = require('express').Router()
const {Exercise, Routine} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const exercises = await Exercise.findAll()
    res.json(exercises)
  } catch (err) {
    next(err)
  }
})

router.get('/:routineId', async (req, res, next) => {
  try {
    const exercises = await Exercise.findAll({
      where: {routineId: req.params.routineId}
    })
    res.json(exercises)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const exercise = await Exercise.create({
      name: req.body.inputExercise,
      sets: req.body.inputSets,
      reps: req.body.inputReps
    })
    const routine = await Routine.findOne({where: {name: req.body.routineName}})
    await exercise.setRoutine(routine)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
