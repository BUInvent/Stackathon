'use strict'

const db = require('../server/db')
const {User, Review, Category, Order, Product} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123', isAdmin: true}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const categories = await Promise.all([
    Category.create({name: 'Magic'}),
    Category.create({name: 'Monsters'}),
    Category.create({name: 'Unearthly'})
  ])

  const products = await Promise.all([
    Product.create({
      title: 'Haunted Doll',
      shortDescription: 'Spooky!',
      longDescription:
        'Creepy looking thing, will ensure paranormal activity in your home. Not suitable for children.',
      price: 25,
      inventoryQuantity: 2,
      imgURL: 'magical.jpg'
    }),
    Product.create({
      title: 'Bigfoot Sighting',
      shortDescription: 'Make sure to stabilize your camera',
      longDescription:
        'Guided hike with guaranteed cryptid encounter. Recording devices not included in package.',
      price: 150,
      inventoryQuantity: 10,
      imgURL: 'monsterous.jpg'
    }),
    Product.create({
      title: 'Alien Abduction',
      shortDescription: "You'll feel this tomorrow",
      longDescription:
        'Sometime in the next week, your sleep will be interrupted by several aliens who want to get to know you better. Exact species of alien varies.',
      price: 75,
      inventoryQuantity: 5,
      imgURL: 'otherworldly.jpg'
    })
  ])
  products[0].addCategory(categories[1])
  products[1].addCategory(categories[0])
  products[2].addCategory(categories[2])

  const reviews = await Promise.all([
    Review.create({
      text: 'That was really...something',
      score: 3,
      userid: 2,
      productid: 3
    }),
    Review.create({
      text: "Yeah, that's haunted alright.",
      score: 5,
      userid: 1,
      productid: 1
    })
  ])

  const orders = await Promise.all([
    Order.create({
      destination: '123 Main St',
      contents: [{title: 'thing1', quantity: 1}],
      price: 10,
      userid: 1
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${categories.length} categories`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${reviews.length} reviews`)
  console.log(`seeded ${orders.length} orders`)
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
