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
    const categories = await Category.findAll({
      where: {name: req.params.name},
      include: [{model: Product}]
    })
    const products = await targetCategory.getProducts()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// router.get('/:name', async (req, res, next) => {
//   try {
//     const category = await Category.findAll({
//       // where: {name: req.params.name},
//       include: [{model: Product, where: {name: req.params.name}}]
//     })
//     // const products = await targetCategory.getProducts()
//     res.json(category)
//   } catch (err) {
//     next(err)
//   }
//   console.log('thing')
// })

// include: [
//   {
//     model: Category,
//     where: {name: 'Magic'}
//   }
// ]
