import React from 'react'
import {Container, Media, Row, Col, Button} from 'reactstrap'

const Order = props => {
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
              <p>
                Date ordered: {props.dateOrdered.toLocaleDateString('en-US')}
              </p>
              {new Date() > props.dateDelivered ? (
                <p>
                  Date delivered:{' '}
                  {props.dateDelivered.toLocaleDateString('en-US')}
                </p>
              ) : (
                <p>
                  Expected delivery:{' '}
                  {props.dateDelivered.toLocaleDateString('en-US')}
                </p>
              )}
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

export default Order
