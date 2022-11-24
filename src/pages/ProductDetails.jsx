import React from 'react';
import { Container, Row ,Col, Button } from 'react-bootstrap';
import {useParams , useNavigate} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import { genratePictureUrl, getProductById } from '../helperFunctions/helper';
import {FaShoppingCart,FaHeart} from "react-icons/fa";
import { addToCart } from '../store/reducers/cartSlice';
import ModalComponent from "../components/ModalComponent";
import {showModal,closeModal} from "../store/reducers/modaleSlice";
import Payment from './../components/Payment';

const ProductDetails = () => {
    const {products} = useSelector(state=>state.product);
    const {isAuthonticated} = useSelector(state=>state.user);
    const {show} = useSelector(state=>state.modal);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const modalButtons =[
        {
          lable:"yes",
          variant:"success",
          click:()=>{dispatch(closeModal())}
        },
        {
          lable:"No",
          click:()=>{dispatch(closeModal())},
          variant:"danger",
        }
      ]
   
    //check if products
    let product;
    if(products){
        product = getProductById(products , id);
    }
    if (!product) {
        return <div className="alert alert-danger text-center">
          <p> no sush Product could be found </p>
        </div>
    };
    const {_id,productPictures ,name ,price ,description,quantity} = product;

    const addItemToCart = ()=>{
      if(isAuthonticated){
        if(quantity >=1){
          dispatch(addToCart(_id));
          navigate('/cart');
        }else{
          dispatch(showModal());
        }
      }else{
        dispatch(showModal());
      }      
    };
    const orderItems = [{
      orderId:_id,
      name:name,
      price:price,
      image:genratePictureUrl(productPictures[0].img),
      quantity:1
    }];
   
  return (
    <div className='product-details mt-3'>
        {
          quantity >=1?
            <ModalComponent
              title="Confirm"
              buttons={modalButtons}
              show={show}
            >
              <p className="text-capitalize lead"> Please login to Add Product To Cart </p>
          </ModalComponent>
          :
            <ModalComponent
            title="Confirm"
            buttons={modalButtons}
            show={show}
          >
            <p className="text-capitalize lead"> this Item his quantity is empty </p>
          </ModalComponent>
        }
       <Container fluid>
            <Row>
                <Col md={4}>
                   <div className='content-image d-flex justify-content-between'>
                        <div className='related-image'>
                            {
                                productPictures&&productPictures.map((pic)=>
                                <img key={pic._id} src={genratePictureUrl(pic.img)} alt="related" />
                                )
                            }
                        </div>
                        <div className='main-image'>
                            <img src={genratePictureUrl(productPictures[0].img)} alt='main' />
                            <span> <FaHeart/> </span>
                        </div>
                   </div>
                   <div className='product-action-btn'>
                      <Button 
                        onClick={addItemToCart}> 
                          <FaShoppingCart/> Add To Cart
                      </Button>
                      <Payment 
                        total={price} 
                        ordersItems={orderItems}
                        quantity={1} 
                        dispatch={dispatch}
                        lable='Buy Now'
                      />
                   </div>
                </Col>
                <Col md={8}>
                    <h2> {name} </h2>
                    <p> <strong>Price:</strong> ${price} </p>
                    <p>
                        <strong>Description: </strong>
                        <span> {description} </span>
                    </p>
                </Col>
            </Row>
       </Container>
      
    </div>
  )
}

export default ProductDetails;
