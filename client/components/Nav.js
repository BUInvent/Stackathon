import React from 'react'
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

class NavBar extends React.Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <div className="sticky-top mb-5">
        <Navbar color="danger" light expand="md">
          <Link
            className="font-weight-bolder navbar-brand"
            style={{fontFamily: 'Permanent Marker'}}
            to="/"
          >
            Jurassic Gains
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  className="nav-link text-dark font-weight-bold"
                  to="/workout-history/"
                >
                  History
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link text-dark font-weight-bold"
                  to={`/routines/${this.props.userId}`}
                >
                  Routines
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="btn btn-dark"
                  to={this.props.isLoggedIn ? '/' : '/login'}
                  onClick={this.props.handleClick}
                >
                  {this.props.isLoggedIn ? 'Logout' : 'Login'}
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavBar)
