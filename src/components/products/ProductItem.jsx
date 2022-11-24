import React from 'react';
import { Card } from "react-bootstrap";
import {Link } from "react-router-dom";
import { genratePictureUrl } from './../../helperFunctions/helper';

const ProductItem = ({product}) => {
  return (
    <div className="product-item">
        <Card>
            <Link to={`/${product.name}/${product._id}`} >
                <Card.Img className="text-center" variant="top" src={genratePictureUrl(product.productPictures[0].img)} />
            </Link>
            <Card.Body>
                <Link to={`/${product.name}/${product._id}`} >
                    <Card.Title> {product.name} </Card.Title>
                </Link>
                <Card.Text>
                    <p>$ {product.price} </p>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ProductItem
