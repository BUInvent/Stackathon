import React from 'react'
import {addAddress, removeAddress} from '../store/account'
import store from '../store'
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
  Input
} from 'reactstrap'

class Address extends React.Component {
  constructor() {
    super()

    this.state = {
      showEdit: false,
      ...store.getState(),

      inputCountry: 'United States',
      inputAddress1: '',
      inputAddress2: '',
      inputCity: '',
      inputState: '',
      inputZip: ''
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  delete = address => {
    const action = removeAddress(address)
    store.dispatch(action)
  }

  add = address => {
    const action = addAddress(address)
    store.dispatch(action)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const newAddress = {
      name: this.state.inputName,
      address1: this.state.inputAddress1,
      address2: this.state.inputAddress2,
      city: this.state.inputCity,
      state: this.state.inputState,
      country: this.state.inputCountry,
      zip: this.state.inputZip
    }
    this.setState({
      showEdit: false
    })
    this.add(newAddress)
  }

  render() {
    return (
      <div>
        {this.state.account.userAddresses.map(address => (
          <div key={address.id}>
            <Media left>
              <Media object data-src={address.imgURL} />
            </Media>
            <Media body>
              <Container>
                <p>{address.name}</p>
                <p>{address.address1}</p>
                <p>{address.address2}</p>
                <p>
                  {address.city}, {address.state} {address.zip}
                </p>
                <p>{address.country}</p>
                <ButtonGroup>
                  <Button onClick={this.delete.bind(this, address)}>
                    Delete
                  </Button>
                </ButtonGroup>
              </Container>
            </Media>
          </div>
        ))}

        <Media body>
          <Container>
            <Button
              className="my-4"
              color="primary"
              onClick={() => {
                this.setState({showEdit: true})
              }}
            >
              Add new
            </Button>
          </Container>
        </Media>

        {this.state.showEdit ? (
          <Media body>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup className="d-block">
                  <Label for="inputName">Name</Label>
                  <Input
                    onChange={this.handleChange}
                    type="text"
                    name="inputName"
                    id="inputName"
                    value={this.state.inputName}
                  />
                </FormGroup>

                <FormGroup className="d-block">
                  <Label for="inputCountry">Country: </Label>
                  <Input
                    onChange={this.handleChange}
                    type="select"
                    name="inputCountry"
                    id="inputCountry"
                    value={this.state.inputCountry}
                  >
                    <option>United States</option>
                    <option>Canada</option>
                  </Input>
                </FormGroup>

                <FormGroup className="d-block">
                  <Label for="inputAddress1">Address line 1</Label>
                  <Input
                    onChange={this.handleChange}
                    type="text"
                    name="inputAddress1"
                    id="inputAddress1"
                    value={this.state.inputAddress1}
                  />
                </FormGroup>

                <FormGroup className="d-block">
                  <Label for="inputAddress2">Address line 2</Label>
                  <Input
                    onChange={this.handleChange}
                    type="text"
                    name="inputAddress2"
                    id="inputAddress2"
                    value={this.state.inputAddress2}
                  />
                </FormGroup>

                <Row form>
                  <Col sm={6}>
                    <FormGroup className="d-block">
                      <Label for="inputCity">City: </Label>
                      <Input
                        onChange={this.handleChange}
                        type="text"
                        name="inputCity"
                        id="inputCity"
                        value={this.state.inputCity}
                      />
                    </FormGroup>
                  </Col>

                  <Col sm={2}>
                    <FormGroup className="d-block">
                      <Label for="inputState">State: </Label>
                      <Input
                        onChange={this.handleChange}
                        type="select"
                        name="inputState"
                        id="inputState"
                        value={this.state.inputState}
                      >
                        <option>AL</option>
                        <option>AK</option>
                        <option>AZ</option>
                        <option>AR</option>
                        <option>CA</option>
                        <option>CO</option>
                        <option>CT</option>
                        <option>DE</option>
                        <option>FL</option>
                        <option>GA</option>
                        <option>HI</option>
                        <option>ID</option>
                        <option>IL</option>
                        <option>IN</option>
                        <option>IA</option>
                        <option>KS</option>
                        <option>KY</option>
                        <option>LA</option>
                        <option>ME</option>
                        <option>MD</option>
                        <option>MA</option>
                        <option>MI</option>
                        <option>MN</option>
                        <option>MS</option>
                        <option>MO</option>
                        <option>MT</option>
                        <option>NE</option>
                        <option>NV</option>
                        <option>NH</option>
                        <option>NJ</option>
                        <option>NM</option>
                        <option>NY</option>
                        <option>NC</option>
                        <option>ND</option>
                        <option>OH</option>
                        <option>OK</option>
                        <option>OR</option>
                        <option>PA</option>
                        <option>RI</option>
                        <option>SC</option>
                        <option>SD</option>
                        <option>TN</option>
                        <option>TX</option>
                        <option>UT</option>
                        <option>VT</option>
                        <option>VA</option>
                        <option>WA</option>
                        <option>WV</option>
                        <option>WI</option>
                        <option>WY</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col sm={4}>
                    <FormGroup className="d-block">
                      <Label for="inputZip">ZIP</Label>
                      <Input
                        onChange={this.handleChange}
                        type="text"
                        name="inputZip"
                        id="inputZip"
                        value={this.state.inputZip}
                        maxLength="10"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Button type="submit">Submit</Button>
              </Form>
            </Container>
          </Media>
        ) : null}
      </div>
    )
  }
}

export default Address
