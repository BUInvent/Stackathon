const router = require('express').Router()
const {Routine} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const routines = await Routine.findAll()
    res.json(routines)
  } catch (err) {
    next(err)
  }
})
