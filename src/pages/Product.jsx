import React from "react";
import {useLocation } from "react-router-dom";
import ProductPage from "../components/products/ProductPage";
import ProductStore from "../components/products/ProductStore";
import {getParams} from "../helperFunctions/helper";

const Product = (props) => {

  const {search} = useLocation();

  const renderProduct = () =>{
    const {type} = getParams(search);
    let content = null ;
    switch (type) {
      case 'page':
        content = <ProductPage {...props}/>
        break;
      case 'store':
          content = <ProductStore {...props} />
          break;
      default:
        content = null;
    };
    return content;
  }

  return (
    <div className="products-list">
     {renderProduct()}
    </div>
  );
};

export default Product;
