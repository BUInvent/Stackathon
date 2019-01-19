const router = require('express').Router()
const {Routine, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const routines = await Routine.findAll()
    res.json(routines)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const routine = await Routine.create({
      name: req.body.inputTitle
    })
    const user = await User.findOne({where: {id: req.body.user}})
    await routine.setUser(user)
    // res.json(routine)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
