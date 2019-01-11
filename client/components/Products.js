import React, {Component} from 'react'
import {Container, Form, Input, Button, Col, Row} from 'reactstrap'
import ProductCard from './ProductCard'
import ProductForm from './ProductForm'

export default class Products extends Component {
  state = {search: '', showProductForm: false}

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

  toggleProductForm = () => {
    this.setState(prevState => ({
      showProductForm: !prevState.showProductForm
    }))
  }
  render() {
    const {category, products, isAdmin} = this.props
    const {showProductForm} = this.state
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
        {isAdmin && (
          <Row className="mb-4">
            <Col>
              <Button onClick={this.toggleProductForm}>Add Product</Button>
            </Col>
          </Row>
        )}
        {showProductForm && (
          <Row className="mb-4">
            <Col>
              <ProductForm />
            </Col>
          </Row>
        )}
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
        <Row className="pl-2">
          {products &&
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Row>
      </Container>
    )
  }
}
