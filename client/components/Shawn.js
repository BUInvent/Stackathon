import React from 'react'
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
}
