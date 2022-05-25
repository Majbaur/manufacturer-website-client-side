import React from "react";
import ReactDOM from "react-dom";
import Carousel from 'react-elastic-carousel';
import Item from './Item'
import './ArrivalProduct.css'

import first from '../../images/BMW 8.jpg'
import second from '../../images/BMW 8.jpg'
import third from '../../images/BMW 8.jpg'
import fourth from '../../images/BMW 8.jpg'
import fifth from '../../images/BMW 8.jpg'
import sixth from '../../images/BMW 8.jpg'


const breakPoints = [
    { width: 1200, itemsToShow: 1 },
    { width: 1750, itemsToShow: 2 },
    { width: 1846, itemsToShow: 3 },
    { width: 2614, itemsToShow: 4 },

    
];
function ArrivalProduct() {
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop:"50px" }}>New Arrival Products</h1>
      <div className="ArrivalProduct">
        <Carousel className='container' breakPoints={breakPoints}>
          <Item><img src={first} alt="" /></Item>
          <Item><img src={second} alt="" /></Item>
          <Item><img src={third} alt="" /></Item>
          <Item><img src={fourth} alt="" /></Item>
          <Item><img src={fifth} alt="" /></Item>
          <Item><img src={sixth} alt="" /></Item>          
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ArrivalProduct />, rootElement);

export default ArrivalProduct