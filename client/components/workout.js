import React from 'react'
import {Row, Form, FormGroup, Input, Col, Label} from 'reactstrap'

class Workout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: []
    }
  }

  componentDidMount() {
    fetch(`/api/exercises/${this.props.match.params.routineId}`)
      .then(res => res.json())
      .then(out => {
        this.setState({exercises: out})
      })
      .catch(err => {
        throw err
      })
  }

  render() {
    return (
      <center>
        <h1>{this.props.match.params.routineName}</h1>

        {this.state.exercises.map(exercise => {
          let setNum = []
          let weightInput = []
          let repsInput = []

          for (let i = 1; i <= exercise.sets; i++) {
            setNum.push(
              <p type="text" key={i} name="exercise">
                {i}
              </p>
            )
            weightInput.push(<Input type="text" name="weight" />)
            repsInput.push(<Input type="text" name="reps" />)
          }

          return (
            <Form key={exercise.id}>
              <Row form>
                <Col md={2}>
                  <Label for="exerciseInputs">{exercise.name}</Label>
                  <FormGroup id="exerciseInputs">
                    {setNum.map(set => {
                      return set
                    })}
                  </FormGroup>
                </Col>

                <Col md={2}>
                  <Label for="weightInputs">LBS</Label>
                  <FormGroup id="weightInputs">
                    {weightInput.map(weight => {
                      return weight
                    })}
                  </FormGroup>
                </Col>

                <Col md={2}>
                  <Label for="repInputs">Reps</Label>
                  <FormGroup id="repInputs">
                    {repsInput.map(reps => {
                      return reps
                    })}
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          )
        })}
      </center>
    )
  }
}

export default Workout
