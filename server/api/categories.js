const router = require('express').Router()
const {Category} = require('../db/models')

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

router.get('/:categoryid', async (req, res, next) => {
  try {
    const targetCategory = await Category.findOne({
      where: {id: req.params.categoryid}
    })
    const products = await targetCategory.getProducts()
    res.json(products)
  } catch (err) {
    next(err)
  }
})
