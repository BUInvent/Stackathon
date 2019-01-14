import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col} from 'reactstrap'
import CartItem from './cart-item'
import {getCart, orderUpdate} from '../store/order'
import {fetchProducts} from '../store/product'

class Cart extends Component {
  componentDidMount() {
    this.props.fetchProducts()
    this.props.getCart(this.props.user.id)
  }

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
              {this.props.cartItems &&
                this.props.cartItems.map(item => {
                  return <CartItem product={this.state.products[item.id - 1]} />
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
    cartItems: state.order.order.content,
    user: state.user,
    products: state.product.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: () => dispatch(getCart()),
    orderUpdate: order => dispatch(orderUpdate(order)),
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
