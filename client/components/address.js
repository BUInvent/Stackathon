import React from 'react'
import {Container, Media, Row, Col, Button} from 'reactstrap'

const Address = props => {
  return (
    <div>
      <Media left>
        <Media object data-src={props.imgURL} />
      </Media>
      <Media body>
        <Container>
          <Row>
            <Col sm="10">
              <p>{props.name}</p>
              <p>{props.address}</p>
              <p>
                {props.city}, {props.state} {props.zip}
              </p>
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

export default Address
