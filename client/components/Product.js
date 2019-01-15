import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import {connect} from 'react-redux'
import {pickProduct} from '../store/product'
import Reviews from './Reviews'

const cart = true

class Product extends Component {
  componentDidMount = () => {
    this.props.pickProduct(this.props.match.params.id)
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
                <Button /* onClick="THUNK: Post request to session.cart" */>
                  Add to Cart
                </Button>
              </Col>
            </Row>
            {cart && (
              <Row className="mt-4">
                <Col>
                  <h6>This item has been added to your cart</h6>
                </Col>
              </Row>
            )}
          </Container>
          <Reviews
            reviews={this.props.reviews}
            title={title}
            productId={id}
            user={this.props.user}
          />
        </>
      )
    )
  }
}

const mapStatetoProps = state => ({
  user: state.user,
  product: state.product.selectedProduct[0],
  reviews: state.product.selectedProduct[1]
})

const mapDispatchToProps = dispatch => ({
  pickProduct: id => dispatch(pickProduct(id))
})

export default connect(mapStatetoProps, mapDispatchToProps)(Product)
