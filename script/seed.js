'use strict'

const db = require('../server/db')
const {User, Review} = require('../server/db/models')

const users = [
  {
    firstName: 'Phurba',
    lastName: 'Sherpa',
    email: 'phurba@email.com',
    password: '123'
  },
  {
    firstName: 'Yooni',
    lastName: 'Park',
    email: 'yooni@email.com',
    password: 'abc'
  },
  {
    firstName: 'Martin',
    lastName: 'Ng',
    email: 'martin@email.com',
    password: '123'
  },
  {
    firstName: 'Alex',
    lastName: 'Penaloza',
    email: 'alex@email.com',
    password: '123'
  }
]

const reviews = [
  {
    userId: 1,
    content: 'BEST RESTAURANT EVER',
    date: '2018/02/23',
    ratings: 4,
    location: 'New York, NY',
    fourSquareId: '45'
  },
  {
    userId: 2,
    content: 'BEST RESTAURANT EVER in asian',
    date: '2018/02/23',
    ratings: 5,
    location: 'New York, NY',
    fourSquareId: '60'
  },
  {
    userId: 4,
    content: 'BEST RESTAURANT EVER IN BURGERS',
    date: '2018/02/23',
    ratings: 4,
    location: 'New York, NY',
    fourSquareId: '75'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    users.map(user => {
      return User.create(user)
    })
  )

  await Promise.all(
    reviews.map(review => {
      return Review.create(review)
    })
  )
  console.log('Seeding success!')
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
