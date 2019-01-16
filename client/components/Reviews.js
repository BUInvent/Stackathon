import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import Review from './Review'
import ReviewForm from './ReviewForm'

export default class Reviews extends Component {
  state = {showReviewForm: false}

  rerenderMe = () => {
    this.forceUpdate()
  }

  toggleReviewForm = () => {
    this.setState(prevState => ({
      showReviewForm: !prevState.showReviewForm
    }))
  }

  render() {
    const {title, reviews, user, productId} = this.props
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <h2
              className="text-center"
              style={{fontFamily: 'Permanent Marker'}}
            >
              Reviews for {title}
            </h2>
          </Col>
        </Row>
        {reviews &&
          reviews.map(review => (
            <Review key={review.id} review={review} title={title} />
          ))}
        {this.state.showReviewForm && (
          <ReviewForm
            user={user}
            productId={productId}
            toggleReviewForm={this.toggleReviewForm}
          />
        )}
        <Row className="mt-4 mb-4">
          <Col>
            {user.email && (
              <Button onClick={this.toggleReviewForm}>Add A Review</Button>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}
