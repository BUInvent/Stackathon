import React from 'react'
import {
  Container,
  Media,
  Row,
  Col,
  Button,
  Form,
  Label,
  Input
} from 'reactstrap'

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
              <Button close />
              <Form>
                <Label for="quantity">Quantity</Label>
                <Input type="select" name="select" id="quantity">
                  <option>1</option>
                  <option>2</option>
                </Input>
                <Button>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Media>
    </div>
  )
}

export default CartItem
