import React , {useEffect} from 'react';
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { genratePictureUrl } from "../../helperFunctions/helper";
import { getProductsBySlug } from "../../store/actions/productAction";
import { useParams, Link } from "react-router-dom";


const ProductStore = () => {
    const { productsByPrice } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { slug } = useParams();
    useEffect(() => {
    dispatch(getProductsBySlug(slug));
  // eslint-disable-next-line
  }, [slug]);
  return (
    <div>
      <div className="section-mobile-info shadow-none mt-0 p-3 mb-5 bg-light rounded">
        <h2 className="m-0">{slug} Mobile Phones</h2>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Tempore molestiae, non, quae facere sunt 
          enim mollitia eligendi modi impedit tenetur temporibus voluptatibus 
          facilis corrupti ad deserunt minima consectetur nesciunt beatae.
          adipisicing elit. Tempore molestiae, non, quae facere sunt 
          enim mollitia eligendi modi impedit tenetur temporibus voluptatibus 
          facilis corrupti ad deserunt minima consectetur nesciunt beatae.
          adipisicing elit. Tempore molestiae, non, quae facere sunt 
          enim mollitia eligendi modi impedit tenetur temporibus voluptatibus 
          facilis corrupti ad deserunt minima consectetur nesciunt beatae. 
        </p>
      </div>``
     <Container >
        {
            productsByPrice &&  Object.keys(productsByPrice).map((key,index)=>{
                return(
                    <div className="product-key shadow-none p-3 mb-5 bg-light rounded">
                      <section key={index} className="section-header my-2 d-flex justify-content-between">
                          <span> {slug} Mobile {key}  </span>
                          <Button>View All</Button>                      
                      </section>
                      <Row>
                        {
                          productsByPrice[key].length>0 ?(
                              productsByPrice[key].map((product)=>
                              <Col key={product._id} lg={3}>
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
                              </Col>
                          )
                          ):(<p className="text-center alert alert-danger"> No Item of {key} </p>)
                        }
                      </Row>
                  </div>
                )
            })
        }
      </Container>
    </div>
  )
}

export default ProductStore
