import React from 'react';
import ArrivalProduct from '../../ArrivalProduct/ArrivalProduct.js';
import Banner from '../Banner/Banner';
// import Inventories from './../../Products/Inventories/Inventories';
import Services from './../../Services/Services';
import LearnMore from './LearnMore.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Inventories></Inventories> */}
            <Services></Services>
            <ArrivalProduct></ArrivalProduct>
            <LearnMore></LearnMore>
        </div>
    );
};

export default Home;