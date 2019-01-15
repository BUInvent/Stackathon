const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'isAdmin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userid', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {id: req.params.userid},
      attributes: ['id', 'email', 'isAdmin']
    })
    const reviews = await user.getReviews()
    const orders = await user.getOrders()
    const data = [user, reviews, orders]
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (err) {
    next(err)
  }
})

router.put('/:userid', async (req, res, next) => {
  try {
    const userToUpdate = await User.findOne({where: {id: req.params.userid}})
    const updatedUser = await userToUpdate.update(req.body)
    res.json(updatedUser)
  } catch (err) {
    next(err)
  }
})
