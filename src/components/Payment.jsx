import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { createNewOrder } from '../store/actions/orderAction';


const Payment = ({total,ordersItems,quantity,dispatch,lable}) => {
  const onToken = (token) => {
    const orderData = {
      token,
      ordersItems,
      total,
      quantity
    };
    dispatch(createNewOrder(orderData));
  }
  return (
    <>
    <StripeCheckout
        token={onToken}
        amount={total * 100} // cents
        currency="EGP"
        shippingAddress
        stripeKey="pk_test_51LuIDwJCbOZJSvRBQ2pPfdGT0CwoPwmqrn9vJw3Z5j7HJ5Z83t2XPUBWByILt89rT7vo9ylSBUghbYxXxt2Eehqb00ZbJ4rkU6"
      >
        <button>{lable}</button>
      </StripeCheckout>
    </>
  )
}

export default Payment;
