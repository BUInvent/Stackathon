import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import {connect} from 'react-redux'
import {pickProduct, fetchProducts} from '../store/product'
import {getCart, orderUpdate} from '../store/order'
import Reviews from './Reviews'

const cart = true

class Product extends Component {
  componentDidMount = () => {
    this.props.pickProduct(this.props.match.params.id)
  }

  componentDidUpdate = () => {
    if (this.props.user.id && !this.props.cartId) {
      this.props.getCart(this.props.user.id)
    }
  }

  handleClick = evt => {
    let inCart = false
    let newContents = []
    if (this.props.cartItems) {
      this.props.cartItems.map(item => {
        if (item.id === Number(evt.target.id)) {
          inCart = true
        }
      })
    }
    if (!inCart && this.props.cartItems) {
      const newItem = {id: Number(evt.target.id), quantity: 1}
      newContents = this.props.cartItems
      newContents.push(newItem)
    } else if (!inCart) {
      const newItem = {id: Number(evt.target.id), quantity: 1}
      newContents = [newItem]
    } else {
      newContents = this.props.cartItems.map(item => {
        if (item.id === Number(evt.target.id)) {
          return {
            id: item.id,
            quantity: item.quantity + 1
          }
        } else {
          return item
        }
      })
    }
    const updatedOrder = {contents: newContents}
    this.props.orderUpdate(this.props.cartId, updatedOrder)
    this.props.getCart(this.props.user.id)
    this.props.fetchProducts()
  }

  render() {
    const {
      imgURL,
      title,
      longDescription,
      inventoryQuantity,
      price,
      id
    } = this.props.product
    return (
      this.props.product && (
        <>
          <Container>
            <Row className="mt-4">
              <Col>
                <h1
                  className="text-center"
                  style={{fontFamily: 'Permanent Marker'}}
                >
                  {title}
                </h1>
              </Col>
              {this.props.user.isAdmin && (
                <Col>
                  <Button /* THUNK: 'put products${id} */>Edit Item</Button>
                </Col>
              )}
            </Row>
            <Row className="mt-2">
              <Col className="d-flex flex-row justify-content-center">
                <div style={{maxWidth: 800}}>
                  <img
                    className="img-fluid"
                    src={imgURL}
                    alt={`picture-of-${title}`}
                  />
                </div>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <p>{longDescription}</p>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <h6>There are {inventoryQuantity} available</h6>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <h5>Price: ${price}</h5>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Button id={id} onClick={this.handleClick}>
                  Add to Cart
                </Button>
              </Col>
            </Row>
          </Container>
          {this.props.reviews && (
            <Reviews
              reviews={this.props.reviews}
              title={title}
              productId={id}
              user={this.props.user}
            />
          )}
        </>
      )
    )
  }
}

const mapStatetoProps = state => ({
  user: state.user,
  product: state.product.selectedProduct[0],
  reviews: state.product.selectedProduct[1],
  cartId: state.order.order.id,
  cartItems: state.order.order.contents
})

const mapDispatchToProps = dispatch => ({
  pickProduct: id => dispatch(pickProduct(id)),
  getCart: id => dispatch(getCart(id)),
  orderUpdate: (id, order) => dispatch(orderUpdate(id, order)),
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStatetoProps, mapDispatchToProps)(Product)
