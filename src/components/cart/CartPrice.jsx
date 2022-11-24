import React from 'react';
import {Card ,ListGroup,Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {BsFillPatchCheckFill} from "react-icons/bs";
import {countSubtotal} from '../../helperFunctions/helper.js' 

const CartPrice = ({filteredCards}) => {
    const {isLoading} = useSelector(state=>state.order);
    const {cart} = useSelector(state=>state.cart);
    // calc total price
   const totalPrice = countSubtotal(cart , filteredCards);
  return (
   <div className='cart-price'>
       <Card>
            {isLoading?  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>:null
            }
            <Card.Header>price details</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item >
                    <p>Price (<span> {
                            filteredCards && filteredCards.length
                          }</span> items)
                    </p>
                   <p> ${ totalPrice}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Discount</p>
                    <p>$10</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Delivery Charges</p>
                    <p>free</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Total Amount</p>
                    <p> ${totalPrice} </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>You will save $2,005 on this order</p>
                </ListGroup.Item>
            </ListGroup>
        </Card>
        <div className='price-section-footer d-flex mt-4'>
            <span> <BsFillPatchCheckFill/> </span>
            <p className='ms-2'>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
        </div>
   </div>
  );
}

export default CartPrice
