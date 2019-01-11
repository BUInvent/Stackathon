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

const ProductCard = ({product}) => {
  const {id, imageURL, name, shortDescription} = product
  return (
    <Card
      style={{
        width: 250,
        height: 325
      }}
      className="m-2"
    >
      <Link to={`/products/${id}`}>
        <CardImg top width="100%" src={imageURL} alt={`picture-of-${name}`} />
      </Link>
      <CardBody style={{position: 'relative'}}>
        <CardTitle>
          <strong>{name}</strong>
        </CardTitle>
        <CardSubtitle>{shortDescription}</CardSubtitle>
        <Button
          style={{position: 'absolute', bottom: 15}}
          /* onClick={THUNK: addToCart} */
        >
          Buy
        </Button>
      </CardBody>
    </Card>
  )
}

export default ProductCard
