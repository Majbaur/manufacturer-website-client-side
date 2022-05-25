import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import Product from '../Product/Product';
import "./Inventories.css";
import GetProducts from './../../../Hooks/GetProducts';

const Inventories = () => 
{

    let isLoad = true;


    
    const [items , setItems] = GetProducts()
    
    let addItems;
    addItems = [...items];


    if(addItems.length!==0)
    {
        isLoad = false;
    }

    const products = addItems.slice(0,6)


    return (
        <div id='Products' className='mar-20'>

            <div data-aos="fade-up" className="container">
                <h2 className='text-center py-4 my-4'>Our Inventory</h2>
                {
                    isLoad ? <Loading className="my-5 py-5"></Loading> : null
                }
                <div  className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        products.map(item => <Product key={item._id} product={item}></Product>)
                    }
                </div>
                
                <div data-aos="fade-up" className="text-center">
                    <Link to="/manageInventories"><button className=' mng-btn rounded'>Manage Your Invenories</button></Link>
                </div>

            </div>


        </div>
    );
};

export default Inventories;