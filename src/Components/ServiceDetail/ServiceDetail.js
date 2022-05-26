import React, { useEffect, useInsertionEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetail from './../../Hooks/useInventoryDetail';

const ServiceDetail = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetail(inventoryId);

    return (
        <div>
            <h2>You are about to book: {inventory.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${inventoryId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;