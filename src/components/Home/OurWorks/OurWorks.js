import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carousel/carousel-1.png';
import carousel2 from '../../../images/carousel/carousel-2.png';
import carousel4 from '../../../images/carousel/carousel-4.png';
import carousel5 from '../../../images/carousel/carousel-5.png';
import './OurWork.css';
const OurWorks = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };

   return (
      <div className="crousel_section">
         <h4 className="pb-4">Here are some of <span className="text-success">our works</span></h4>
         <Carousel
            className="container"
            activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      </div>
   );
};

export default OurWorks;