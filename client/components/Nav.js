import React from 'react'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import axios from 'axios'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleClick() {
    if (this.props.isLoggedIn) {
      axios.post('/auth/logout')
    }
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className="font-weight-bolder">
            Supernaturals
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/magic/">Magic</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/monsters/">Monsters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/otherworldly/">Otherworldly</NavLink>
              </NavItem>
              <NavItem>
                <Button
                  href={this.props.isLoggedIn ? '/' : '/login'}
                  onClick={this.handleClick}
                >
                  {this.props.isLoggedIn ? 'Logout' : 'SignIn/Up'}
                </Button>
              </NavItem>
              {!this.props.admin ? (
                <NavItem>
                  <Button href="/cart/">Cart</Button>
                </NavItem>
              ) : (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Option 2</DropdownItem>
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

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
