import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import ProducttTable from './ProducttTable';
import GetProducts from './../../../Hooks/GetProducts';

const Product = (props) =>{
    
    const {item} = props;
    const [products , setProducts] = GetProducts()

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://shrouded-brushlands-76339.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount>0){
                    console.log('delected')
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            })
        }
    }
    return (
        <article>
            <div className="col">
                <div className="card h-100 border-0 p-2 shadow-lg rounded">
                    <div className="card-body text-center mx-auto mt-5">
                        <ProducttTable  item = {item}></ProducttTable>

                        <Button variant='danger' className='d-block mt-5 mx-auto' onClick={() => handleDelete(item._id)}>Delete Item</Button>


                    </div>
                </div>
            </div>
        </article>
    );
};

export default Product;