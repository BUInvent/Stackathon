const router = require('express').Router()
const {Category, Product} = require('../db/models')

module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const category = await Category.create(req.body)
    res.json(category)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (err) {
    next(err)
  }
})

router.get('/:name', async (req, res, next) => {
  try {
    const category = await Product.findAll({
      include: [
        {
          model: Category,
          where: {name: req.params.name}
        }
      ]
    })
    res.json(category)
  } catch (err) {
    next(err)
  }
})
