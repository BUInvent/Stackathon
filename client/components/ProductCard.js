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

const Card = ({id, image, name, shortDescription}) => {
  return (
    <div>
      <Link className="card" to={`/products/${id}`}>
        <CardImg top width="100%" src={image} alt={`picture-of-${name}`} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{shortDescription}</CardText>
          <Button onClick={console.log('add to cart')}>Button</Button>
        </CardBody>
      </Link>
    </div>
  )
}

export default Card
