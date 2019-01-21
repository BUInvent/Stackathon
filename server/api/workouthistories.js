
const router = require('express').Router()
const { WorkoutHistory } = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
    try {
        const workouts = await WorkoutHistory.findAll({
            where: {
                userId: req.params.userId
            }
        })
        res.json(workouts)
    } catch (err) {
        next(err)
    }
})

router.get('/:userId', async (req, res, next) => {
    try {
        const routines = await Routine.findAll({
            where: { userId: req.params.userId }
        })
        res.json(routines)
    } catch (err) {
        next(err)
    }
})
