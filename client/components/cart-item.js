import React from 'react'
import {Container, Media, Row, Col, Button} from 'reactstrap'

const CartItem = props => {
  return (
    <div>
      <Media left>
        <Media object data-src={props.imgURL} />
      </Media>
      <Media body>
        <Container>
          <Row>
            <Col sm="10">
              <Media heading>{props.title}</Media>
              <p>{props.description}</p>
              <p>${props.price}</p>
            </Col>
            <Col sm="2">
              <Button size="sm">x</Button>
            </Col>
          </Row>
        </Container>
      </Media>
    </div>
  )
}

export default CartItem
