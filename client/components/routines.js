import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'

const Routines = () => {
  return (
    <center>
      <h1>Routines</h1>
      <Button className="col-sm-6 offset-sm-3">Routine 1</Button>
      <br />
      <Button className="col-sm-6 offset-sm-3">Routine 2</Button>
      <br />

      <form action="/new-routine">
        <Fab color="primary" type="submit" aria-label="Add">
          <AddIcon />
        </Fab>
      </form>
    </center>
  )
}

export default Routines
