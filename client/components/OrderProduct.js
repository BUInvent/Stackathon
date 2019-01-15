import React from 'react'

class OrderProduct extends React.Component {
  render() {
    const {title, description, quantity, price} = this.props

    return (
      <div>
        <h2>Title: {title}</h2>
        <p>Description: {description}</p>
        <p>quantity: {quantity}</p>
        <p>Price: ${price}</p>
      </div>
    )
  }
}

export default OrderProduct
