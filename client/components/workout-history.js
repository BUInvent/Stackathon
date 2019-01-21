
import React from 'react'
import Button from '@material-ui/core/Button'

class WorkoutHistory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      workouts: []
    }
  }

  componentDidMount() {
    fetch('/api/workouthistories/1')
      .then(res => res.json())
      .then(out => {
        this.setState({ workouts: out })
      })
      .catch(err => {
        throw err
      })
  }

  render() {
    return (
      <center>
        <h1>History</h1>

        {this.state.workouts.map(workout => {
          return (
            <Button key={workout.id} className="col-sm-7">
              {workout.date}
            </Button>
          )
        })}

      </center >
    )
  }

}

export default WorkoutHistory
