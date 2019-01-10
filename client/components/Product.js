import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

const Product = ({
  id,
  imageURL,
  name,
  longDescription,
  quantity,
  user,
  session,
  price
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>{name}</h1>
        </Col>
        {user.isAdmin && (
          <Col>
            <Button onClick={`THUNK: 'put products${id}`}>Edit Item</Button>
          </Col>
        )}
      </Row>
      <Row>
        <Col>
          <img
            width="100%"
            className="img-fluid"
            src={imageURL}
            alt={`picture-of-${name}`}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{longDescription}</p>
        </Col>
        <Col>
          <h2>There are {quantity} available</h2>
          <h3>Price: ${price}</h3>
          <Button onClick="THUNK: Post request to session.cart">
            Add to Cart
          </Button>
          {session.cart.id && (
            <h3>{`There is ${
              session.cart.id
            } ${name}(s) added to your cart`}</h3>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Product
