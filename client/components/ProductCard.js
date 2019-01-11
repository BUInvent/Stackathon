import React from 'react'
import {Link} from 'react-router-dom'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import {isAbsolute} from 'path'

const ProductCard = ({product}) => {
  const {id, imageURL, name} = product
  return (
    <div className="m-2">
      {' '}
      <Card
        style={{
          width: 250,
          height: 325
        }}
      >
        <Link to={`/products/${id}`}>
          <CardImg top width="100%" src={imageURL} alt={`picture-of-${name}`} />
        </Link>
        <CardBody>
          <CardTitle>
            <h5>{name}</h5>
          </CardTitle>
          <Button
          /* onClick={THUNK: addToCart} */
          >
            Buy
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default ProductCard
