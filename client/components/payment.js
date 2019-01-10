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
                <Row form>
                  <Col md={4}>
                    <Input type="text" name="city" id="city" />
                    <Label for="city">City</Label>
                  </Col>
                  <Col md={4}>
                    <Input type="text" name="state" id="state" />
                    <Label for="state">State</Label>
                  </Col>
                  <Col md={2}>
                    <Input type="number" name="zip" id="zip" />
                    <Label for="zip">ZIP</Label>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
            <h3>Payment Info</h3>
            <Form>
              <FormGroup>
                <Input type="select" name="select" id="cardprov">
                  <option>Visa</option>
                  <option>MasterCard</option>
                </Input>
                <Label for="cardprov">Card Provider</Label>
                <Input type="text" name="cardname" id="cardname" />
                <Label for="cardname">Cardholder Name</Label>
                <Input type="text" name="cardnum" id="cardnum" />
                <Label for="cardnum">Card Number</Label>
                <Input type="text" name="cardsec" id="cardsec" />
                <Label for="cardsec">Security Number</Label>
                <Input type="date" name="date" id="expdate" />
                <Label for="expdate">Card Expiration Date</Label>
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
