import React from 'react'
import {Button, Form, FormGroup, Input, Row, Col} from 'reactstrap'

/**
 * COMPONENT
 */
class NewRoutine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {exercise: ['Bench Press', 'Bench Press']}
  }

  render() {
    return (
      <div>
        <h1>
          <center>Create New Routine</center>
        </h1>

        <Form onSubmit={console.log('hello')}>
          <FormGroup className="col-sm-6 offset-sm-3">
            <Input
              type="text"
              name="Title"
              id="titleInput"
              placeholder="Title"
            />
          </FormGroup>

          <FormGroup className="col-sm-6 offset-sm-3">
            <Input
              type="text"
              name="Exercise"
              id="exerciseInput"
              placeholder="Exercise"
            />
          </FormGroup>

          <FormGroup className="col-sm-6 offset-sm-3">
            <Input placeholder="Sets" type="number" step="1" />
          </FormGroup>
          <FormGroup className="col-sm-6 offset-sm-3">
            <Input placeholder="Reps" type="number" step="1" />
          </FormGroup>

          <FormGroup className="col-sm-6 offset-sm-3">
            <Button type="submit" color="primary" block>
              Add Exercise
            </Button>
          </FormGroup>
        </Form>

        <Row form>
          <Col className="col-sm-4" />
          <Col>
            <FormGroup>
              <Button type="submit" color="warning">
                X
              </Button>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <p>Bench Press</p>
            </FormGroup>
          </Col>
        </Row>
      </div>
    )
  }
}

export default NewRoutine
