
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
    fetch(`/api/workouthistories/${this.props.match.params.userId}`)
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
              {workout.routine.name} - {moment(workout.date).format('dddd, MMMM D, Y')}
            </Button>
          )
        })}

      </center >
    )
  }

}

export default WorkoutHistory
