import React from 'react';
import { Carousel } from "react-responsive-carousel";
import infinx from "../../images/infinx.jpg";
import realme from "../../images/realme.jpg";
import vivo from "../../images/vivo.jpg";
import samsung from "../../images/samsung.jpg";

const Slider = () => {
  return (
    <div className="home-slider">
        <Carousel
          autoPlay={true}
          infiniteLoop = {true}
          showThumbs = {false}
        >
            <div className="slider-image">
                <img src={infinx} height="400px"  alt="noImage" />
            </div>
            <div className="slider-image">
                <img src={realme} height="400px"  alt="noImage" />
            </div>
            <div className="slider-image">
                <img src={vivo} height="400px"  alt="noImage" />
            </div>
            <div className="slider-image">
                <img src={samsung} height="400px"  alt="noImage" />
            </div>
        </Carousel>
    </div>
  )
}

export default Slider
