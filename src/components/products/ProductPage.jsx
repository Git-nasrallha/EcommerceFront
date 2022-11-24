import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Row ,Col,Card} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getParams } from "../../helperFunctions/helper";
import { getProductPage } from "../../store/actions/productAction";
import { Carousel } from "react-responsive-carousel";

const ProductPage = () => {
  const {page} = useSelector(state => state.product);
  const { search } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = getParams(search);
    dispatch(getProductPage(params));
  }, [dispatch,search]);
  
  if (!page) {
    return <div className="alert alert-danger text-center">
      <p> no sush Page could be found </p>
    </div>
  };

  return (
    <div className="page">
      <section className="page=header">
        <h4> {page.title} </h4>
        <Carousel
          autoPlay="true"
          dynamicHeight = "true"
          infiniteLoop = "true"
          showIndicators = "false"
          showThumbs = "false"
        >
          {
            page.banners && page.banners.map((banner ,index)=><div key={index}>
                <img src={banner.img} height="400px"  alt="noImage" />
                <p className="legend">Legend 1</p>
            </div>
            )
          }
        </Carousel>
      </section>
      <div className="products-image container">
          <Row>
            {
              page.products && page.products.map((product,index)=>
                <Col md={4}>
                  <Card key={index}>
                    <Card.Img variant="top" src={product.img} />
                  </Card>
                </Col>
              )
            }
          </Row>
      </div>
    </div>
  );
};

export default ProductPage;
