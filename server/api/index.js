const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/routines', require('./routines'))
router.use('/exercises', require('./exercises'))
router.use('/sets', require('./sets'))
router.use('/workouthistories', require('./workouthistories'))
// router.use('/workout-details', require('./workout-details'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
