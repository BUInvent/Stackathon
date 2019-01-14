import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
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
            Supernatural Store
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  className="nav-link text-dark font-weight-bold"
                  to="/magic/"
                >
                  Magic
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link text-dark font-weight-bold"
                  to="/monsters/"
                >
                  Monsters
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link text-dark font-weight-bold"
                  to="/unearthly/"
                >
                  Unearthly
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="btn btn-dark"
                  to={this.props.isLoggedIn ? '/' : '/login'}
                  onClick={this.props.handleClick}
                >
                  {this.props.isLoggedIn ? 'Logout' : 'SignIn/Up'}
                </Link>
              </NavItem>
              {this.props.isLoggedIn && (
                <NavItem>
                  <Link className="btn btn-dark" to="/account/">
                    Account
                  </Link>
                </NavItem>
              )}
              {!this.props.admin ? (
                <NavItem>
                  <Link className="btn btn-dark" to="/cart/">
                    Cart
                  </Link>
                </NavItem>
              ) : (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    className="text-dark font-weight-bold"
                    nav
                    caret
                  >
                    Panels
                  </DropdownToggle>
                  <DropdownMenu right>
                    <Link
                      className="dropdown-item nav-link text-dark font-weight-bold"
                      to="/admin/users"
                    >
                      Users
                    </Link>
                    <DropdownItem divider />
                    <Link
                      className="dropdown-item nav-link text-dark font-weight-bold"
                      to="/admin/orders"
                    >
                      Orders
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
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
