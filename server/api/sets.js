const router = require('express').Router()
const { Exercise, Routine, Sets, WorkoutHistory, User } = require('../db/models')
module.exports = router

router.post('/:routineId/:userId', async (req, res, next) => {

    console.log('req 1 ', req.params)
    console.log('req 2 ', req.body)
    console.log('req 3 ', req.query)

    try {
        const workoutDate = await WorkoutHistory.create({
            date: new Date()
        })
        const routine = await Routine.findOne({ where: { id: req.params.routineId } })
        const user = await User.findOne({ where: { id: req.params.userId } })
        await workoutDate.setRoutine(routine)
        await workoutDate.setUser(user)

        for(let i = 0; i < (req.body.length/2); i++){
            for(let j = 0; j < ())
        }

        // res.sendStatus(204)
        res.json(workoutDate)
    } catch (err) {
        next(err)
    }
})
