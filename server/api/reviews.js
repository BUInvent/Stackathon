const router = require('express').Router()
const {Review} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body)
    res.json(newReview)
  } catch (err) {
    next(err)
  }
})

router.delete('/:reviewid', async (req, res, next) => {
  try {
    await Review.destroy({where: {id: req.params.reviewid}})
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})
