const router = require('express').Router()
const {Order, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:orderid', async (req, res, next) => {
  try {
    const order = await Order.findOne({where: {id: req.params.id}})
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body.orderData)
    const orderer = await User.findOne({where: {id: req.body.userId}})
    await newOrder.belongsTo(orderer)
    await orderer.hasOne(newOrder)
  } catch (err) {
    next(err)
  }
})

router.put('/:orderid', async (req, res, next) => {
  try {
    const orderToUpdate = await Order.findOne({
      where: {
        id: req.params.id
      }
    })
    const updatedOrder = await orderToUpdate.update(...req.body)
    res.json(updatedOrder)
  } catch (err) {
    next(err)
  }
})

router.get('/active/:userid', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.userid,
        status: 'Created'
      }
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})
