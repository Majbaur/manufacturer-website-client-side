import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({inventory}) => {
    const {_id, name, img, description, price} = inventory;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
            <Link as={Link} to="spotify.com/bd-en/premium/"className='btn btn-Emerald-300 pt-2' target="_blank">Buy Now</Link>
        </div>
    );
};

export default Service;