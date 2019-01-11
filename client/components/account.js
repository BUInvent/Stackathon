import React from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'
import Order from './order'
import Address from './address'

import classnames from 'classnames'

class Account extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1'
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '1'})}
              onClick={() => {
                this.toggle('1')
              }}
            >
              Orders
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '2'})}
              onClick={() => {
                this.toggle('2')
              }}
            >
              Addresses
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ul>
                  {this.props.orderedItems.map((item, index) => {
                    return <Order key={index} {...item} />
                  })}
                </ul>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <ul>
                  {this.props.userAddresses.map((address, index) => {
                    return <Address key={index} {...address} />
                  })}
                </ul>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

const mapState = state => {
  return {
    orderedItems: state.account.orderedItems,
    userAddresses: state.account.userAddresses
  }
}

export default connect(mapState)(Account)
