import React from 'react'
import {Button, Form, FormGroup, Input, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
class NewRoutine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exercise: [],
      inputExercise: '',
      inputSets: 3,
      inputReps: 8,
      showExercise: false,
      inputTitle: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addExercise = event => {
    event.preventDefault()
    const newExercise = {
      name: this.state.inputExercise,
      sets: this.state.inputSets,
      reps: this.state.inputReps
    }
    if (this.state.exercise.includes(newExercise)) {
      return
    }
    this.setState(previousState => ({
      exercise: [...previousState.exercise, newExercise],
      inputExercise: ''
    }))
    event.target.submit()
  }

  removeExercise = exerciseIn => {
    this.setState(state => ({
      exercise: state.exercise.filter(exercise => exercise !== exerciseIn)
    }))
  }

  showExercise = e => {
    e.preventDefault()
    this.setState({showExercise: true})
    e.target.submit()
  }

  render() {
    return (
      <div>
        <h1>
          <center>Create New Routine</center>
        </h1>

        <Form action="/api/routines" onSubmit={this.showExercise} method="post">
          <Input
            type="hidden"
            id="userID"
            name="user"
            value={this.props.userId}
          />

          <FormGroup className="col-sm-6 offset-sm-3">
            <Input
              onChange={this.handleChange}
              type="text"
              name="inputTitle"
              id="inputTitle"
              placeholder="Title"
              disabled={this.state.showExercise}
              value={this.state.inputTitle}
            />
          </FormGroup>

          <FormGroup className="col-sm-6 offset-sm-3">
            <Button
              className="col-sm-6 offset-sm-3"
              type="submit"
              color="primary"
              disabled={this.state.showExercise}
              block
            >
              Create Routine
            </Button>
          </FormGroup>
        </Form>

        {this.state.showExercise ? (
          <div>
            <Form
              action="/api/exercises"
              onSubmit={this.addExercise}
              method="post"
            >
              <Input
                type="hidden"
                id="routineName"
                name="routineName"
                value={this.state.inputTitle}
              />
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
                <Input
                  onChange={this.handleChange}
                  placeholder="Sets"
                  type="number"
                  name="inputSets"
                  step="1"
                  value={this.state.inputSets}
                />
              </FormGroup>
              <FormGroup className="col-sm-6 offset-sm-3">
                <Input
                  onChange={this.handleChange}
                  placeholder="Reps"
                  name="inputReps"
                  type="number"
                  step="1"
                  value={this.state.inputReps}
                />
              </FormGroup>

              <FormGroup className="col-sm-6 offset-sm-3">
                <Button type="submit" color="primary" block>
                  Add Exercise
                </Button>
              </FormGroup>
            </Form>

            <Form action="/routines">
              <Button color="primary" type="submit" block>
                Save and go back to routines
              </Button>
            </Form>
          </div>
        ) : null}

        <ul>
          {this.state.exercise.map(exercise => {
            return (
              <Row key={exercise.id}>
                <Col className="col-sm-4" />
                <Col>
                  <FormGroup>
                    <Button
                      onClick={() => this.removeExercise(exercise)}
                      color="warning"
                    >
                      X
                    </Button>
                  </FormGroup>
                </Col>

                <Col>
                  <FormGroup>
                    <p>{exercise.name}</p>
                  </FormGroup>
                </Col>
              </Row>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    userId: state.user.id
  }
}

export default connect(mapState, null)(NewRoutine)
