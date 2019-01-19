import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'

class Routines extends React.Component {
  constructor() {
    super()
    this.state = {
      routines: []
    }
  }

  componentDidMount() {
    fetch('/api/routines/1')
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
            <Button key={routine.id} className="col-sm-7">
              {routine.name}
            </Button>
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

export default Routines
