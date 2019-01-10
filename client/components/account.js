import React from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'
import Order from './order'

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
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ul>
                  {this.props.orderedItems.map(item => {
                    return <Order key={item.id} {...item} />
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
    orderedItems: state.account.orderedItems
  }
}

export default connect(mapState)(Account)
