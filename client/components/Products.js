import React, {Component} from 'react'
import {Container, Form, Input, Button, Col, Row} from 'reactstrap'
import ProductCard from './ProductCard'

export default class Products extends Component {
  state = {search: ''}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log({...this.state})
    this.setState({search: ''})
    // will need this.props.user to add to profile with
    // THUNK: put OR post
  }
  render() {
    const {category, products} = this.props
    return (
      <Container>
        <Row className="mb-4">
          <Col>
            <h1
              className="text-center"
              style={{fontFamily: 'Permanent Marker'}}
            >
              {category}
            </h1>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Form
              className="form-inline my-2 my-lg-0"
              onSubmit={this.handleSubmit}
            >
              <Input
                onChange={this.handleChange}
                value={this.state.title}
                type="text"
                name="search"
                id="search"
                placeholder="search keywords here"
              />

              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          {products &&
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Row>
      </Container>
    )
  }
}
