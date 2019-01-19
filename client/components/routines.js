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
      <Fab color="primary" aria-label="Add">
        <AddIcon />
      </Fab>
    </center>
  )
}

export default Routines
