import React from 'react'
import {Row, Col} from 'reactstrap'
import Stars from './Stars'
import {Link} from 'react-router-dom'

const Review = ({review}) => {
  const {stars, username, userId, date, title, text} = review
  return (
    <React.Fragment>
      <Row className="mt-4">
        <Col>
          <Stars stars={+stars} />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col sm="4">
          <Link to={`/users/${userId}`}>
            <h6>{username}</h6>
          </Link>
        </Col>
        <Col sm="4">
          <h6>{title}</h6>
        </Col>
        <Col sm="4">
          <h6>{date}</h6>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <p>{text}</p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Review
