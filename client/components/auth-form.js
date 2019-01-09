import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Button, Form, FormGroup, Input, FormText} from 'reactstrap'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <Form onSubmit={handleSubmit} name={name}>
        <FormGroup className="col-sm-6 offset-sm-3">
          <Input
            type="email"
            name="email"
            id="emailInput"
            placeholder="Email"
          />
        </FormGroup>

        <FormGroup className="col-sm-6 offset-sm-3">
          <Input
            type="password"
            name="password"
            id="passwordInput"
            placeholder="Password"
          />
          {error &&
            error.response && (
              <FormText color="danger">{error.response.data}</FormText>
            )}
        </FormGroup>

        <FormGroup className="col-sm-6 offset-sm-3">
          <Button type="submit" color="primary" block>
            {displayName}
          </Button>
        </FormGroup>
      </Form>

      <center>or</center>

      <Form action="/auth/google">
        <FormGroup className="col-sm-6 offset-sm-3">
          <Button type="submit" block>
            {displayName} with Google
          </Button>
        </FormGroup>
      </Form>

      <Form action="/auth/facebook">
        <FormGroup className="col-sm-6 offset-sm-3">
          <Button type="submit" block>
            {displayName} with Facebook
          </Button>
        </FormGroup>
      </Form>
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
