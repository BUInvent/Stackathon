import React from 'react'

import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

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
        this.setState({ exercises: out })
      })
      .catch(err => {
        throw err
      })
  }

  render() {
    return (
      <center>
        <h1>{this.props.match.params.routineName}</h1>

        <form
          action={`/api/sets/${this.props.match.params.routineId}/${
            this.props.userId
            }`}
          method="post"
          onSubmit={this.onSubmit}
        >
          {this.state.exercises.map(exercise => {
            let setNum = []
            let weightInput = []
            let repsInput = []

            for (let i = 1; i <= exercise.sets; i++) {
              setNum.push(
                <p type="text" key={`${exercise.name}${i}`} name="exercise">
                  {i}
                </p>
              )
              weightInput.push(
                <Input
                  type="text"
                  key={`weight ${exercise.name}${i}`}
                  name={`weight exercise${exercise.id}`}
                />
              )
              repsInput.push(
                <Input
                  type="text"
                  key={`reps ${exercise.name}${i}`}
                  name={`reps exercise${exercise.id}`}
                />
              )
            }

            return (
              <FormGroup row>
                <Grid md={2}>
                  <FormLabel for="exerciseInputs">{exercise.name}</FormLabel>
                  <FormGroup id="exerciseInputs">
                    {setNum.map(set => {
                      return set
                    })}
                  </FormGroup>
                </Grid>

                <Grid md={2}>
                  <FormLabel for="weightInputs">LBS</FormLabel>
                  <FormGroup id="weightInputs">
                    {weightInput.map(weight => {
                      return weight
                    })}
                  </FormGroup>
                </Grid>

                <Grid md={2}>
                  <FormLabel for="repInputs">Reps</FormLabel>
                  <FormGroup id="repInputs">
                    {repsInput.map(reps => {
                      return reps
                    })}
                  </FormGroup>
                </Grid>
              </FormGroup>
            )
          })}
          <Button color="primary" type="submit">
            Finish
          </Button>
        </form>
      </center>
    )
  }
}

const mapState = state => {
  return {
    userId: state.user.id
  }
}

export default connect(mapState, null)(Workout)
