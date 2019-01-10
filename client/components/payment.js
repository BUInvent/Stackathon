import React, {Component} from 'react'
import {Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap'
import {connect} from 'react-redux'

class Payment extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{size: 6, offset: 3}}>
            <h1>Payment</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{size: 1, offset: 1}}>
            <h3>Cart Total</h3>
            <p>${this.props.cartSum}</p>
            <p>$5.00</p>
            <p>$20.00</p>
            <p>___________</p>
            <p>${this.props.cartSum + 5 + 20}</p>
          </Col>
          <Col sm="12" md={{size: 5, offset: 2}}>
            <h3>Shipping Address</h3>
            <Form>
              <FormGroup>
                <Input type="text" name="address1" id="address1" />
                <Label for="address1">Address Line 1</Label>
                <Input type="text" name="address2" id="address2" />
                <Label for="address2">Address Line 2</Label>

                <Input type="text" name="city" id="city" />
                <Label for="city">City</Label>

                <Input type="text" name="state" id="state" />
                <Label for="state">State</Label>
                <Input type="number" name="zip" id="zip" />
                <Label for="zip">ZIP</Label>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartSum: state.cart.price
  }
}

export default connect(mapStateToProps)(Payment)
