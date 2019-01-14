import React from 'react'
import {Row, Col, Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import Products from './Products'

export const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <img
              width="100%"
              className="img-fluid"
              src="horror-eyes.svg"
              alt="illustration-of-eyes-in-the-dark"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col sm="4" className="pt-2 pb-3">
            <h1
              className="text-center"
              style={{fontFamily: 'Permanent Marker'}}
            >
              Magic
            </h1>
            <div className="mt-2" />
            <p>
              The darkest arts and the lightest motifs. Table or Card. Real or
              Fake. We got you.
            </p>
            <div className="mt-2" />
            <Link to="/magic/">
              <img
                width="100%"
                className="img-fluid"
                src="magical.jpg"
                alt="picture-of-hands-performing-magic"
              />
            </Link>
          </Col>
          <Col sm="4" className="pt-2 pb-3">
            <h1
              className="text-center"
              style={{fontFamily: 'Permanent Marker'}}
            >
              Monsters
            </h1>
            <div className="mt-2" />
            <p>
              The darkest arts and the lightest motifs. Table or Card. Real or
              Fake. We got you.
            </p>
            <div className="mt-2" />
            <Link to="/monsters/">
              <img
                width="100%"
                className="img-fluid"
                src="monsterous.jpg"
                alt="picture-of-bigfoot-in-a-forest"
              />
            </Link>
          </Col>
          <Col sm="4" className="pt-2 pb-3">
            <h1
              className="text-center"
              style={{fontFamily: 'Permanent Marker'}}
            >
              Unearthly
            </h1>
            <div className="mt-2" />
            <p>
              The darkest arts and the lightest motifs. Table or Card. Real or
              Fake. We got you.
            </p>
            <div className="mt-2" />
            <Link to="/unearthly/">
              <img
                width="100%"
                className="img-fluid"
                src="otherworldly.jpg"
                alt="picture-of-sci-fi-earth-and-space"
              />
            </Link>
          </Col>
        </Row>
      </Container>
      <Products />
    </React.Fragment>
  )
}
