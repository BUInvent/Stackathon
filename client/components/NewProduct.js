import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Container
} from 'reactstrap'

export default class NewProduct extends React.Component {
  state = {
    price: '0',
    title: '',
    shortDescription: '',
    longDescription: '',
    inventoryQuantity: 0,
    imgURL: undefined
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log({...this.state})
    this.setState({
      price: '0',
      title: '',
      shortDescription: '',
      longDescription: '',
      inventoryQuantity: 0,
      imgURL: undefined
    })
    // will need this.props.user to add to profile with
    // THUNK: put OR post
  }
  render() {
    return (
      <Row>
        <Col>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className="d-block">
              <Label for="title">Title</Label>
              <Input
                onChange={this.handleChange}
                value={this.state.title}
                type="text"
                name="title"
                id="title"
                placeholder="title goes here"
              />
            </FormGroup>
            <FormGroup className="d-block">
              <Label for="shortDescription">Product Summary</Label>
              <Input
                onChange={this.handleChange}
                value={this.state.shortDescription}
                type="text"
                name="shortDescription"
                id="shortDescription"
                placeholder="summary goes here"
              />
            </FormGroup>
            <FormGroup className="d-block">
              <Label for="longDescription">Full Description</Label>
              <Input
                style={{height: 200}}
                onChange={this.handleChange}
                value={this.state.longDescription}
                type="textarea"
                name="longDescription"
                id="longDescription"
                placeholder="Enter alll the details of the product"
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup className="d-block">
                  <Label for="price">Product Cost</Label>
                  <Input
                    onChange={this.handleChange}
                    value={this.state.price}
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Enter price as number"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="d-block">
                  <Label for="inventoryQuantity">Amount in Stock</Label>
                  <Input
                    onChange={this.handleChange}
                    value={this.state.inventoryQuantity}
                    type="text"
                    name="inventoryQuantity"
                    id="inventoryQuantity"
                    placeholder="how much is in stock?"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup className="d-block">
              <Label for="imgURL">Product Image URL</Label>
              <Input
                onChange={this.handleChange}
                value={this.state.imgURL}
                type="text"
                name="imgURL"
                id="imgURL"
                placeholder="leave blank for default image"
              />
            </FormGroup>
            <FormGroup>
              <Button>Submit</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    )
  }
}
