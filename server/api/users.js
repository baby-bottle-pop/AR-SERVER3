const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       // explicitly select only the id and email fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
//       attributes: ['id', 'email']
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll()
    if (allUsers) res.json(allUsers)
    else console.log('No users!')
  } catch (error) {
    next(error)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const {email, password, firstName, lastName} = req.body
    console.log('Inside signup')
    const newUser = await User.create({email, password, firstName, lastName})
    res.json(newUser)
  } catch (error) {
    next(error)
  }
})
