/* import React from 'react'
import Reviews from './Reviews'
const name = 'am item'
const isLoggedIn = true
const reviews = [
  {
    id: 64546546,
    stars: '5',
    username: 'dude the man',
    userId: 23,
    date: '10 - 20 - 89',
    title: 'so good',
    text:
      'ipsum lormealfjalfjlajfljaflkjalfjlajflajflajfslj lsajflasjf alfsalfjaj lfajajf'
  },
  {
    id: 4587,
    stars: '3',
    username: 'dude the man',
    userId: 2325,
    date: '10 - 20 - 89',
    title: 'so good',
    text:
      'ipsum lormealfjalfjlajfljaflkjalfjlajflajflajfslj lsajflasjf alfsalfjaj lfajajf'
  }
]

export default function Shawn() {
  return (
    <React.Fragment>
      <Reviews name={name} isLoggedIn={isLoggedIn} reviews={reviews} />
    </React.Fragment>
  )
} */

const product = {
  id: 123,
  imageURL: 'card-placehoder.png',
  name: '0123456789012345678901234567890123456789', //40
  shortDescription: '01234567890123456789012345678901234567890123',
  longDescription:
    'lafkfaljafj alksfjlasfjlajsflj alfjlasfjlafjlaj  lafjsljafsljafsljalsfkj  alfkjalfjlajflajf alfjlafjfj lojlfajlafj lajfljaflkjasflj  lafjlasfjlajsflajsfljasfl  afljasfljaf  faljfaljf asfljaslfjaljf  falkjflafj  lafjjfaljfkladsjlkfasljfa lafjljasflafsjlafsj  aljflajsfljafl af s',
  quantity: 20,
  price: 20.89
}
const products = Array(100)
  .fill(1)
  .map(item => (item = {...product}))
  .map((item, index) => {
    item.id = index + 1
    return item
  })

const session = {cart: {name: 'Thisis20characterslongish'}}
const isAdmin = false

import React from 'react'
import ProductCard from './ProductCard'
import Product from './Product'
import Products from './Products'

export default function Shawn() {
  return (
    <React.Fragment>
      <Products category="All Products" products={products} isAdmin={isAdmin} />
    </React.Fragment>
  )
}
