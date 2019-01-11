import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import Review from './Review'
import ReviewForm from './ReviewForm'

export default class Reviews extends Component {
  constructor(props) {
    super(props)
    this.state = {showReviewForm: false}
    this.toggleReviewForm = this.toggleReviewForm.bind(this)
  }
  toggleReviewForm() {
    this.setState(prevState => ({
      showReviewForm: !prevState.showReviewForm
    }))
  }
  render() {
    const {name, reviews, isLoggedIn} = this.props
    return (
      <Container>
        <Row>
          <Col>
            <h1
              className="text-center"
              style={{fontFamily: 'Permanent Marker'}}
            >
              Reviews for {name}
            </h1>
          </Col>
        </Row>
        {reviews &&
          reviews.map(review => <Review key={review.id} review={review} />)}
        <Row className="mt-4">
          <Col>
            {isLoggedIn && (
              <Button onClick={this.toggleReviewForm}>Add A Review</Button>
            )}
          </Col>
        </Row>
        {this.state.showReviewForm && <ReviewForm />}
      </Container>
    )
  }
}
