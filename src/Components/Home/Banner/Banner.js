import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from '../../../images/DISPLSY.jpg';
import banner2 from '../../../images/HDD.jpg';
import banner3 from '../../../images/RAM.jpg';



const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-25 "
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h3>Take a Safe journey with DREAMS VEHICLE.</h3>
                    <p>We are providing you with the best vehicle ever in the world.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-25 "
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption className="text-dark">
                    <h3>Choose the best product and stay with us.</h3>
                    <p>To make a beautiful journey with the best vehicles for you.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-25 "
                    src={banner3}
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h3>DREAMS VEHICLE!!!</h3>
                    <p>For the best car at the best price, choose the best one with DREAMS VEHICLE.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
           
        </Carousel>
    );
};

export default Banner;