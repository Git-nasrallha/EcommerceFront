import React from 'react';
import { Row ,Col} from "react-bootstrap";
import {useSelector} from "react-redux";
import ProductItem from './../products/ProductItem';


const ItemsHome = () => {
    const {products} = useSelector(state=>state.product);

  return (
    <div className="home-items">
        <h2 className="text-center">Products</h2>
        <Row className="mt-5">
            {
                products && products.map((product)=>
                   <Col md={3}> <ProductItem key={product._id} product ={product} /> </Col>
                )
            }
        </Row>>
    </div>
  )
}

export default ItemsHome
