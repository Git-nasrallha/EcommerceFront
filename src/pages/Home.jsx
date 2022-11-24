import React from 'react'
import { Container ,Row,Col } from 'react-bootstrap'
import Slider from './../components/home/Slider';
import Filter from './../components/home/Filter';
import ItemsHome from './../components/home/ItemsHome';

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <Container fluid>
        <Row>
          <Col md={2}>  <Filter/> </Col>
          <Col md={10}> <ItemsHome/> </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
