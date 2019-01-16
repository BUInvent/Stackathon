import React from 'react'
import {Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap'
import {createReview} from '../store/review'
import {connect} from 'react-redux'
class ReviewForm extends React.Component {
  state = {
    stars: '0',
    title: '',
    text: '',
    userId: this.props.user.id,
    productId: this.props.productId,
    date: new Date().toISOString().split('T')[0]
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      stars: '0',
      title: '',
      text: ''
    })
    this.props.createReview(this.state)
    this.props.toggleReviewForm()
  }
  render() {
    return (
      <Row>
        <Col>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className="d-block" style={{width: 100}}>
              <Label for="stars">Star ★ Rating</Label>
              <Input
                onChange={this.handleChange}
                value={this.state.stars}
                type="select"
                name="stars"
                id="stars"
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
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
              <Label for="text">Review Section</Label>
              <Input
                style={{height: 200}}
                onChange={this.handleChange}
                value={this.state.text}
                type="textarea"
                name="text"
                id="text"
                placeholder="review goes here"
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

// const mapStatetoProps = state => ({
//   user: state.user,
//   products: state.product.products
// })

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
})

export default connect(null, mapDispatchToProps)(ReviewForm)
