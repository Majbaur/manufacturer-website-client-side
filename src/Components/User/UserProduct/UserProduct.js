import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProduct.css'
import { Button } from 'react-bootstrap';
import GetProducts from './../../../Hooks/GetProducts';

const UserProduct = ({addItem}) => {
    
    const [addedItems , setAddedItems] = useState()

    const { _id, name, img , description , Quantity , Supplier , price } = addItem;

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://shrouded-brushlands-76339.herokuapp.com/addedItem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = addedItems.filter(addedItem => addedItem._id !== id);
                setAddedItems(remaining);
            })
        }
    }

    return (
        <article>
        <div data-aos="fade-up" className="col ">
            <div className="card h-100 cardImage border-start-0 border-bottom-0 border-top-0 p-3 border-end-3">
                <div className='round-img mx-auto'>
                    <img src={img} className="card-img-top w-100" alt="..." />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price : {price}</p>
                    <p>In stock : {Quantity}</p>
                    <p>Supplier : {Supplier}</p>
                    <Button variant='danger' className='d-block mt-5 mx-auto' onClick={() => handleDelete(addItem._id)}>Delete Item</Button>
                </div>
            </div>
        </div>

    </article>
    );
};

export default UserProduct;