import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

export default class Product extends Component {
  render() {
    const {
      imgURL,
      title,
      longDescription,
      inventoryQuantity,
      price
    } = this.props.product
    return (
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
          {isAdmin && (
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
    )
  }
}
