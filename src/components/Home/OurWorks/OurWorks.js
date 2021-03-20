import React from 'react';
import carousel1 from '../../../images/carousel/carousel-1.png';
import carousel2 from '../../../images/carousel/carousel-2.png';
import carousel3 from '../../../images/carousel/carousel-3.png'
import carousel4 from '../../../images/carousel/carousel-4.png';
import carousel5 from '../../../images/carousel/carousel-5.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './OurWork.css';

const OurWorks = () => {
  const allCarousel = [carousel1,carousel2,carousel3,carousel4,carousel5]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 2014, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <>
      <section className="py-5 bg-dark">
        <h4 className="text-center text-white pb-5">Here are some of <span className="text-success">our works</span></h4>
        <div className="container">
          <Carousel responsive={responsive} infinite={true}
            autoPlay={true} autoPlaySpeed={4000} keyBoardControl={true} dotListClass="custom-dot-list-style" showDots={true}>
            {
              allCarousel.map((carousel, index) => {
                return (
                  <div key={index+100}>
                    <img className="image" src={carousel} alt=""/>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </section>
    </>
   );
};

export default OurWorks;
