import React from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'
import Order from './order'
import Address from './address'
import classnames from 'classnames'
import {fetchOrders} from '../store/order'
import {fetchProducts} from '../store/product'

class Account extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: '1',
      userAddresses: this.props.userAddresses
    }
  }

  componentDidMount() {
    this.props.fetchOrders(this.props.user.id)
    this.props.fetchProducts()
  }

  delete = id => {
    this.setState(prevState => ({
      userAddresses: prevState.userAddresses.filter(address => address !== id)
    }))
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {
    const {orders, products} = this.props

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
                  {orders.map(order => {
                    return (
                      <Order key={order.id} {...order} products={products} />
                    )
                  })}
                </ul>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <ul>
                  <Address />
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
    products: state.product.products,
    orders: state.account.orders,
    user: state.user,
    userAddresses: state.account.userAddresses
  }
}

const mapDispatch = dispatch => {
  return {
    fetchOrders: userID => dispatch(fetchOrders(userID)),
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(Account)
