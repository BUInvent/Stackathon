import React from 'react'
import {Container, Media, Row, Col, Button, ButtonGroup} from 'reactstrap'

// const Address = props => {
class Address extends React.Component {
  delete(id) {
    this.props.delete(id)
  }

  render() {
    return (
      <div>
        {this.props.userAddresses.map(address => (
          <div key={address.id}>
            <Media left>
              <Media object data-src={address.imgURL} />
            </Media>
            <Media body>
              <Container>
                <Row>
                  <Col sm="10">
                    <p>{address.name}</p>
                    <p>{address.address}</p>
                    <p>
                      {address.city}, {address.state} {address.zip}
                    </p>
                    <ButtonGroup>
                      <Button>Edit</Button>
                      <Button onClick={this.delete.bind(this, address)}>
                        Delete
                      </Button>
                      <Button>Set as default</Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Container>
            </Media>
          </div>
        ))}
      </div>
    )
  }
}

export default Address
