import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div className="col-sm-6 offset-sm-3">
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
          />
        </div>

        <div className="col-sm-6 offset-sm-3">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>

        <div className="col-sm-6 offset-sm-3">
          <button type="submit" className="btn btn-primary btn-block">
            {displayName}
          </button>
        </div>

        <div className="col-sm-6 offset-sm-3">
          <p className="text-center">or</p>
        </div>

        <div className="col-sm-6 offset-sm-3">
          <button
            onClick="location.href = '/auth/google';"
            type="button"
            className="btn btn-secondary btn-block"
          >
            {displayName} with Google
          </button>
        </div>

        <div className="col-sm-6 offset-sm-3">
          <button
            onClick="location.href = '/auth/facebook';"
            type="button"
            className="btn btn-secondary btn-block"
          >
            {displayName} with Facebook
          </button>
        </div>

        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
