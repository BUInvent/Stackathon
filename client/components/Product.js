import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

const Product = ({isAdmin, product, session}) => {
  const {imageURL, name, longDescription, quantity, price} = product
  return (
    <Container>
      <Row className="mt-2">
        <Col>
          <h1 className="text-center" style={{fontFamily: 'Permanent Marker'}}>
            {name}
          </h1>
        </Col>
        {isAdmin && (
          <Col>
            <Button /* HUNK: 'put products${id} */>Edit Item</Button>
          </Col>
        )}
      </Row>
      <Row className="mt-2">
        <Col>
          <div className="mt-2 justify-content-center">
            <img
              width="100%"
              className="img-fluid"
              src={imageURL}
              alt={`picture-of-${name}`}
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
          <h6>There are {quantity} available</h6>
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
      {session.cart.name && (
        <Row className="mt-4">
          <Col>
            <h6>This item has been added to your cart</h6>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Product
