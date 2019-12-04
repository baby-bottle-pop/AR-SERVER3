const router = require('express').Router()
const {Review} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    console.log('stahp')
    const allReviews = await Review.findAll()
    res.json(allReviews)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const businessId = req.params.id
    const reviews = await Review.findAll({
      limit: 4,
      where: {
        fourSquareId: businessId
      },
      order: [['createdAt', 'DESC']]
    })
    if (!reviews) {
      console.log('Does not existo plz try again')
    } else {
      res.json(reviews)
    }
    // console.log('testing this route')
  } catch (error) {
    next(error)
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    console.log('leggo my eggo')
    const businessId = req.params.id
    const {content, ratings} = req.body
    const newReview = await Reviews.create({
      content,
      ratings,
      fourSquareId: businessId
    })
    res.send(newReview)
  } catch (error) {
    next(error)
  }
})

//middleware for  validating user

//get route for specific user reviews (optional)

//post route to create reviews

//put route to edit the reviews

//delete reoute to delete the reviews

//make them more secure using passport

module.exports = router
