import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col} from 'reactstrap'
import CartItem from './cart-item'
import {getCart, orderUpdate} from '../store/order'
import {fetchProducts} from '../store/product'

class Cart extends Component {
  constructor() {
    super()
    this.state = {cartprice: 0}
  }

  componentDidMount = () => {
    this.props.fetchProducts()
    this.forceUpdate()
  }

  componentDidUpdate() {
    if (this.props.user.id && !this.props.cartItems) {
      this.props.getCart(this.props.user.id)
    }
    if (this.props.cartItems) {
      const newPrices = this.props.cartItems.map(item => {
        return (
          item.quantity *
          this.props.products.find(product => {
            return product.id === item.id
          }).price
        )
      })
      const newCartPrice = newPrices.reduce((acc, curr) => acc + curr, 0)
      if (newCartPrice !== this.state.cartprice) {
        this.setState({cartprice: newCartPrice})
      }
    }
  }

  clickHandler = evt => {
    const newContents = this.props.cartItems.filter(
      item => item.id !== Number(evt.target.parentNode.id)
    )
    const updatedOrder = {
      contents: newContents
    }
    this.props.orderUpdate(this.props.cartId, updatedOrder)
  }

  submitHandler = evt => {
    evt.preventDefault()
    const newContents = this.props.cartItems.map(item => {
      if (item.id === Number(evt.target.id)) {
        return {
          id: item.id,
          quantity: evt.target.previousSibling.value
        }
      } else {
        return item
      }
    })
    const updatedOrder = {
      contents: newContents
    }
    this.props.orderUpdate(this.props.cartId, updatedOrder)
  }

  checkoutHandler = evt => {
    evt.preventDefault()
    const updatedOrder = {
      orderStatus: 'Placed'
    }
    this.props.orderUpdate(this.props.cartId, updatedOrder)
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
              {this.props.cartItems && this.props.cartItems[0] ? (
                this.props.cartItems.map(item => {
                  return (
                    <CartItem
                      key={item.id}
                      product={this.props.products.find(product => {
                        return product.id === item.id
                      })}
                      quantity={item.quantity}
                      submitHandler={this.submitHandler}
                      clickHandler={this.clickHandler}
                    />
                  )
                })
              ) : (
                <p>Cart Is Empty</p>
              )}
            </ul>
          </Col>
          <Col sm="12" md={{size: 3}}>
            <p>Cart Sum: ${this.state.cartprice}</p>
            <p>Tax: $5.00</p>
            <p>Shipping: $20.00</p>
            <p>___________</p>
            <p>Total Price: ${this.state.cartprice + 5 + 20}</p>
            <button type="button" onClick={this.checkoutHandler}>
              Checkout
            </button>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.order.order.contents,
    cartId: state.order.order.id,
    user: state.user,
    products: state.product.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: id => dispatch(getCart(id)),
    orderUpdate: (id, order) => dispatch(orderUpdate(id, order)),
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
