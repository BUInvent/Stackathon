import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col} from 'reactstrap'
import CartItem from './cart-item'

class Cart extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{size: 6, offset: 3}}>
            <h1>Your Cart</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{size: 9}}>
            <ul>
              {this.props.cartItems.map(item => {
                //debugger
                return <CartItem {...item} />
              })}
            </ul>
          </Col>
          <Col sm="12" md={{size: 1, offset: 1}}>
            <p>${this.props.cartSum}</p>
            <p>$5.00</p>
            <p>$20.00</p>
            <p>___________</p>
            <p>${this.props.cartSum + 5 + 20}</p>
            <button>Checkout</button>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cart,
    cartSum: state.cart.price
  }
}

export default connect(mapStateToProps)(Cart)
