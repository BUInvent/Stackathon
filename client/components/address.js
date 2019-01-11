import React from 'react'
import {
  Container,
  Media,
  Row,
  Col,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap'

class Address extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showEdit: false
    }
  }

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
                  <Col sm="12">
                    <p>{address.name}</p>
                    <p>{address.address}</p>
                    <p>
                      {address.city}, {address.state} {address.zip}
                    </p>
                    <ButtonGroup>
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

        <Media body>
          <Container>
            <Row>
              <Col sm="12">
                <Button
                  className="my-4"
                  color="primary"
                  onClick={() => {
                    this.setState({showEdit: true})
                  }}
                >
                  Add new
                </Button>
              </Col>
            </Row>
          </Container>
        </Media>

        {this.state.showEdit ? (
          <Form>
            <FormGroup>
              <Label for="address1">Address line 1</Label>
              <Input type="text" name="address1" id="address1" />
            </FormGroup>

            <FormGroup>
              <Label for="address2">Address line 2</Label>
              <Input type="textarea" name="address2" id="address2" />
            </FormGroup>

            <FormGroup>
              <Label for="zip">ZIP</Label>
              <Input type="textarea" name="text" id="zip" />
            </FormGroup>

            <FormGroup>
              <Label for="state">Country: </Label>
              <Input type="select" name="select" id="state">
                <option>IL</option>
                <option>AZ</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="Country">Country: </Label>
              <Input type="select" name="select" id="Country">
                <option>United States</option>
                <option>Canada</option>
              </Input>
            </FormGroup>

            <Button>Submit</Button>
          </Form>
        ) : null}
      </div>
    )
  }
}

export default Address
