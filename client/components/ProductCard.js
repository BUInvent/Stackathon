import React from 'react'
import {Link} from 'react-router-dom'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'

const ProductCard = ({product}) => {
  const {id, imgURL, title, shortDescription} = product
  return (
    <Card
      style={{
        width: 250,
        height: 325
      }}
      className="m-2"
    >
      <Link to={`/products/${id}`}>
        <CardImg top width="100%" src={imgURL} alt={`picture-of-${title}`} />
      </Link>
      <CardBody style={{position: 'relative'}}>
        <CardTitle>
          <strong>{title}</strong>
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
