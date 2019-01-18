import React from 'react'
import {Button, Form, FormGroup, Input, Row, Col} from 'reactstrap'

/**
 * COMPONENT
 */
class NewRoutine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {exercise: ['Bench Press', 'Bicep Curls'], inputExercise: ''}
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addExercise = event => {
    event.preventDefault()
    const newExercise = this.state.inputExercise
    this.setState(previousState => ({
      exercise: [...previousState.exercise, newExercise]
    }))
  }

  render() {
    return (
      <div>
        <h1>
          <center>Create New Routine</center>
        </h1>

        <Form onSubmit={this.addExercise}>
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
              onChange={this.handleChange}
              type="text"
              name="inputExercise"
              id="inputExercise"
              placeholder="Exercise"
              value={this.state.inputExercise}
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

        <ul>
          {this.state.exercise.map(exercise => {
            return (
              <Row key={exercise.id}>
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
                    <p>{exercise}</p>
                  </FormGroup>
                </Col>
              </Row>
            )
          })}
        </ul>

        <Button
          className="col-sm-6 offset-sm-3"
          type="submit"
          color="primary"
          block
        >
          Create Routine
        </Button>
      </div>
    )
  }
}

export default NewRoutine
