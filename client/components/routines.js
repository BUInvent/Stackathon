import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'

class Routines extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routines: []
    }
  }

  componentDidMount() {
    fetch(`/api/routines/${this.props.match.params.userId}`)
      .then(res => res.json())
      .then(out => {
        this.setState({routines: out})
      })
      .catch(err => {
        throw err
      })
  }

  render() {
    return (
      <center>
        <h1>Routines</h1>

        {this.state.routines.map(routine => {
          return (
            <form
              key={routine.id}
              action={`/workout/${routine.name}/${routine.id}`}
            >
              <Button className="col-sm-7" type="submit">
                {routine.name}
              </Button>
            </form>
          )
        })}

        <form action="/new-routine">
          <Fab color="primary" type="submit" aria-label="Add">
            <AddIcon />
          </Fab>
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

export default connect(mapState, null)(Routines)
