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
  const product = props.product
  if (product) {
    return (
      <div>
        <Media left>
          <Media object data-src={product.imgURL} />
        </Media>
        <Media body>
          <Container>
            <Row>
              <Col sm="10">
                <Media heading>{product.title}</Media>
                <p>{product.shortDescription}</p>
                <p>${product.price}</p>
              </Col>
              <Col sm="2">
                <Button
                  close
                  onClick={props.clickHandler}
                  id={product.id - 1}
                />
                <Form>
                  <Label for="quantity">Quantity</Label>
                  <Input
                    type="number"
                    name="number"
                    id="quantity"
                    min="1"
                    defaultValue={props.quantity}
                  />
                  <Button
                    type="submit"
                    onClick={props.submitHandler}
                    id={product.id - 1}
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Media>
      </div>
    )
  } else {
    return null
  }
}

export default CartItem
