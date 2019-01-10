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
