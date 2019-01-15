import React from 'react'
import {Container, Media, Row, Col} from 'reactstrap'
import OrderProduct from './OrderProduct'

class Order extends React.Component {
  render() {
    const {products} = this.props

    const productIDMap = {}
    for (let i = 0; i < products.length; i++) {
      productIDMap[products[i].id] = i
    }

    if (products.length < 1) return <div />

    return (
      <div>
        <Media left>
          <Media object data-src={this.props.imgURL} />
        </Media>
        <Media body>
          <Container>
            <Row>
              <Col sm="12">
                <ul>
                  {this.props.contents.map(content => {
                    return (
                      <OrderProduct
                        key={content.id}
                        {...content}
                        title={products[productIDMap[content.id]].title}
                        description={
                          products[productIDMap[content.id]].shortDescription
                        }
                        price={products[productIDMap[content.id]].price}
                        quantity={
                          products[productIDMap[content.id]].inventoryQuantity
                        }
                      />
                    )
                  })}
                </ul>
                <p>Status: {this.props.status}</p>
                <p>Destination: {this.props.destination}</p>
              </Col>
            </Row>
          </Container>
        </Media>
      </div>
    )
  }
}

export default Order
