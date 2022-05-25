import React from 'react';
import ArrivalProduct from '../../ArrivalProduct/ArrivalProduct.js';
import Banner from '../Banner/Banner';
import Inventories from './../../Products/Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <ArrivalProduct></ArrivalProduct>
        </div>
    );
};

export default Home;