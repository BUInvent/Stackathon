
const router = require('express').Router()
const { WorkoutHistory, Routine } = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
    try {
        const workouts = await WorkoutHistory.findAll({
            where: {
                userId: req.params.userId
            }, include: [Routine]
        })

        res.json(workouts)
    } catch (err) {
        next(err)
    }
})