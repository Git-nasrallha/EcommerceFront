import React from 'react';
import {useSelector} from "react-redux";
import { genratePictureUrl } from '../../helperFunctions/helper';
import fshard from '../../images/fa_62673aCart.png';
import { addToCart,decreaseItem,deleteItemFromCart } from '../../store/reducers/cartSlice';
import ModalComponent from '../ModalComponent';
import {showModal,closeModal} from "../../store/reducers/modaleSlice";
import { toast } from 'react-toastify';


const CartItem = ({carts,cartItem ,dispatch}) => {
  const {_id,name,price,productPictures,quantity} = cartItem;
  const currentItem = carts.find(({productId})=>productId === _id);
  const {show} = useSelector(state=>state.modal);
  //increase item quantity
  const handleIncreaseQuantity =()=>{
    if(quantity >1){
      dispatch(addToCart(_id));
      toast.info(`${name} Is Increases`,{
        position:"top-right",
        autoClose:1000
      });
    }else{
      dispatch(showModal());
    }
   
  };
  //deccrease item quantity
  const handleDecreaseQuantity =()=>{
    dispatch(decreaseItem(_id));
    if(currentItem.quantity === 1){
      toast.warn(`${name} Removed from Cart`,{
        position:"top-right",
        autoClose:1000
      });
    }else{
      toast.info(`${name} Is Decrease`,{
        position:"top-right",
        autoClose:1000
      });
    }
  };
  // handle yes modal button
  const handleMoadalSuccess =()=>{
    if(quantity === 1){
      dispatch(closeModal());
    }else{
      dispatch(deleteItemFromCart(_id),closeModal());
      toast.info(`${name} Is Removed from Cart`,{
        position:"top-right",
        autoClose:1000
      });
    }
  }

  const modalButtons =[
    {
      lable:"yes",
      variant:"success",
      click:()=>{handleMoadalSuccess()}
    },
    {
      lable:"No",
      click:()=>{dispatch(closeModal())},
      variant:"danger",
    }
  ]

  return (
    <div className='cart-item'>
      {
        quantity === 1?
          <ModalComponent
            title="Confirm"
            buttons={modalButtons}
            show={show}
          >
            <p className="text-capitalize lead"> 
              this Item his quantity is equal 1 cannet increase it
           </p>
          </ModalComponent>
          :
          <ModalComponent
            title="Confirm"
            show={show}
            buttons={modalButtons}
          >
            <p className="text-capitalize lead">
              are you sure to want to remove this item from your cart
            </p>
          </ModalComponent>
      }
      <div className='cart-item-content d-flex justify-content-between'>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-3">
              <img src={genratePictureUrl(productPictures[0].img)} 
                    className="img-fluid rounded-start item-image" alt="item" />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title"> {name} </h5>
                <ul className='list-unstyled'>
                    <li> <strong>Size:</strong> <span>M</span> </li>
                    <li> 
                      <strong>seller:</strong> 
                      <span>TRIPR </span> 
                      <img src={fshard} alt="shard"/>
                    </li>
                    <li> 
                      <span> {price}</span> 
                      <span>$200 </span> 
                      <a href='!#'> 87% Off3 offers applied </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className='delivery'> Delivery by Wed Sep 21 | <span>Free</span> </p>
      </div>
      <div className='cart-action d-flex'>
        <div>
          <button className='increase-btn' onClick={()=>handleDecreaseQuantity()}> - </button>
          <input type="text" value={currentItem.quantity} readOnly />
          <button className='decrease-btn' onClick={()=>handleIncreaseQuantity()}> + </button>
        </div>
        <div className='ms-5'>
          <a href='!#' className='mx-3'>save for later</a>
          <button className='mx-3 remove' onClick={()=>dispatch(showModal())}>Rmove</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
