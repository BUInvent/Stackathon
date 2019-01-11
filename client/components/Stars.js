import React from 'react'

const Stars = ({stars}) => {
  const starsJoined = Array(stars)
    .fill('★')
    .join(' ')
  return <div>{starsJoined}</div>
}
export default Stars
