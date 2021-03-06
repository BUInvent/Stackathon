import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  Home,
  WorkoutHistory,
  Routines,
  Workout,
  WorkoutDetails
} from './components'
import {me} from './store'
import NewRoutine from './components/new-routine'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}

        {isLoggedIn ? (
          <Route exact path="/" component={Home} />
        ) : (
          <Route exact path="/" component={Login} />
        )}

        <Route path="/workout-history/:userId?" component={WorkoutHistory} />
        <Route
          path="/workout/:routineName/:routineId"
          component={Workout}
          name="workout"
        />
        <Route
          path="/workout-details/:workouthistoryId"
          component={WorkoutDetails}
        />
        <Route path="/routines/:userId?" component={Routines} />
        <Route path="/new-routine" component={NewRoutine} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={Home} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
