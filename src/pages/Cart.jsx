import React from 'react';
import {Container , Row ,Col} from "react-bootstrap";
import CartItem from '../components/cart/CartItem';
import CartPrice from '../components/cart/CartPrice';
import {useSelector ,useDispatch} from "react-redux";
import Payment from '../components/Payment';
import {genratePictureUrl,countSubtotal} from '../helperFunctions/helper.js' 

const Cart = () => {
  const {cart} = useSelector(state=>state.cart);
  const {products} = useSelector(state=>state.product);
 
  const filteredCards = products && products.filter(({ _id}) => {
     const productItem = cart && cart.find(({ productId}) => {
        return productId === _id;
    });
   return productItem;
  });

  // quantity in cart
  const quantityInCart = cart.reduce((a,b)=> a + b.quantity,0);
  const cartTotalAmount = countSubtotal(cart ,filteredCards);
// create new order
  const orderItems = [];
  filteredCards && filteredCards.map((item)=>{
    orderItems.push(
     {
      orderId:item._id,
      name:item.name,
      price:item.price,
      image:genratePictureUrl(item.productPictures[0].img),
      quantity:cart.find(({productId})=>{return item._id === productId}).quantity
     }
    );
    return true;
  });

  const dispatch = useDispatch();

  if(cart.length === 0){
    return <div className='alert alert-info text-center'>Cart Is Empty!</div>
  }
  return (
    <div className='cart-page'>
      <Container fluid>
        <Row>
            <Col md={8}>
                <div className='cart-items'>
                    <div className='cart-item-header d-flex justify-content-around'>
                        <a href='!#' className='active'> flibkart (<span>
                          {
                            filteredCards && filteredCards.length>0 ?cart.length:null
                          }
                          </span>) </a>
                        <a href='!#'> Grocery </a>
                    </div>
                    <div className='cart-item-delivery d-flex justify-content-between'>
                        <p className='mt-2'> from saved addresses</p>
                        <button>enter delivery poincode</button>
                    </div>
                    <div className='cart-item-content'>
                        {
                          filteredCards && filteredCards.map((cartItem,index)=>
                          <CartItem key={index} cartItem={cartItem} carts={cart} dispatch={dispatch}/>)
                        }
                    </div>
                    <div className='cart-item-footer'>
                      <Payment 
                        total={cartTotalAmount} 
                        ordersItems={orderItems}
                         quantity={quantityInCart} 
                         dispatch={dispatch}
                         lable="checkout"
                      />
                    </div>
                </div>
            </Col>
            <Col md={4}>
              <CartPrice filteredCards={filteredCards}  />
            </Col>
        </Row>
        <div className='cart-footer d-flex justify-content-between'>
          <p>Policies:Returns Policy | Terms of use | Security | Privacy | Infringement</p>
          <p>© 2007-2022 Flipkart.com</p>
          <p>
           Need help? Visit the <a href='!#'>Help Center</a> or <a href='!#'>Contact Us</a>
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Cart
 