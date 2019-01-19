import React from 'react'
import {Row, Form, FormGroup, Input, Col, Label} from 'reactstrap'

const Workout = () => {
  return (
    <center>
      <h1>Shoulders</h1>

      <Form>
        <Row form>
          <Col md={2}>
            <Label for="exerciseInputs">Bench Press</Label>
            <FormGroup id="exerciseInputs">
              <p type="text" name="exercise">
                1
              </p>
              <p type="text" name="exercise">
                2
              </p>
              <p type="text" name="exercise">
                3
              </p>
            </FormGroup>
          </Col>

          <Col md={2}>
            <Label for="weightInputs">LBS</Label>
            <FormGroup id="weightInputs">
              <Input type="text" name="weight" />
              <Input type="text" name="weight" />
              <Input type="text" name="weight" />
            </FormGroup>
          </Col>

          <Col md={2}>
            <Label for="repInputs">Reps</Label>
            <FormGroup id="repInputs">
              <Input type="text" name="reps" />
              <Input type="text" name="reps" />
              <Input type="text" name="reps" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </center>
  )
}

export default Workout
