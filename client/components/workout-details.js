import React from 'react'
import Button from '@material-ui/core/Button'
import {Row, Col} from 'reactstrap'

class WorkoutDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sets: {}
    }
  }

  componentDidMount() {
    fetch(`/api/sets/${this.props.match.params.workouthistoryId}`)
      .then(res => res.json())
      .then(out => {
        this.setState({sets: out})
      })
      .catch(err => {
        throw err
      })
  }

  render() {
    let sets = {}
    if (Array.isArray(this.state.sets)) {
      for (let i = 0; i < this.state.sets.length; i++) {
        if (this.state.sets[i].exercise.name in sets) {
          sets[this.state.sets[i].exercise.name].push(this.state.sets[i])
        } else {
          sets[this.state.sets[i].exercise.name] = [this.state.sets[i]]
        }
      }
    }

    return !Array.isArray(this.state.sets) ? (
      <div>Loading...</div>
    ) : (
      <center>
        <h1>Workout Details</h1>
        {Object.keys(sets).map(set => {
          return (
            <div key={set.id}>
              <Row>
                <Col xs="2">{set}</Col>
              </Row>

              {sets[set].map((inSet, ind) => {
                return (
                  <Row key={inSet.id}>
                    <Col xs="1">{ind + 1}</Col>
                    <Col xs="1">
                      {inSet.weight} X {inSet.reps}
                    </Col>
                  </Row>
                )
              })}
            </div>
          )
        })}
      </center>
    )
  }
}

export default WorkoutDetails
