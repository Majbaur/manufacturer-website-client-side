import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [inventorys, setInventorys] = useState([]);

    useEffect( ()=>{
        fetch('https://shrouded-brushlands-76339.herokuapp.com/items')
        .then(res => res.json())
        .then(data => setInventorys(data));
    }, [])

    return (
        <div id="services" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Services</h1>
            <div className="services-container">
            {
                inventorys.map(inventory => <Service
                    key={inventory._id}
                    inventory={inventory}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;