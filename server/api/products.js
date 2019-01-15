const router = require('express').Router()
const {Product, Category, Review} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:productid', async (req, res, next) => {
  try {
    const product = await Product.findOne({where: {id: req.params.productid}})
    const reviews = await Review.findAll({where: {productId: product.id}})
    const responseData = [product, reviews]
    res.json(responseData)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body.productData)
    for (let i = 0; i < req.body.categories.length; i++) {
      let addedCategory = await Category.findOne({
        where: {id: req.body.categories[i]}
      })
      await newProduct.addCategory(addedCategory)
      await addedCategory.addProduct(newProduct)
    }
    res.json(newProduct)
  } catch (err) {
    next(err)
  }
})

router.put('/:productid', async (req, res, next) => {
  try {
    const productToUpdate = await Product.findOne({where: {id: req.params.id}})
    const updatedProduct = await productToUpdate.update(req.body)
    res.json(updatedProduct)
  } catch (err) {
    next(err)
  }
})
