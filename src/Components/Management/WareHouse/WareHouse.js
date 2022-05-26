import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GetProducts from '../../../Hooks/GetProducts';
import Product from '../Product/Product';
import "./Warehouse.css"

const WareHouse = () => {

    const [pageCount, setPageCount] = useState(0);

    const [page, setPage] = useState(0);

    const [size, setSize] = useState(4);


    const [items, setItems] = GetProducts(page, size);


    useEffect(() => {
        fetch("https://shrouded-brushlands-76339.herokuapp.com/itemsCount")
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 4);

                setPageCount(pages);
            })
    }, [])
    return (
        <div  className='mar-20'>
            <div className="container">
                <h2 className='text-center py-4 my-4'>Our Inventory</h2>
                <div className="row row-cols-1 row-cols-md-2 g-5">
                {
                    items.map(item => <Product key={item._id} item = {item}></Product>)
                }
                </div>

                <div className="pagination-container  my-5 py-4">
                    <article aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <button className="page-link" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            {
                                [...Array(pageCount).keys()].map(number => <li key={number} className={page === number ? "page-item active" : "page-item"}><button className="page-link" onClick={() => setPage(number)}>{number + 1}</button></li>)
                            }
                            <li className="page-item">
                                <button className="page-link" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </article>
                </div>
                <Link to="/addItem"><button className='new-item-btn'>Add New Item</button></Link>
            </div>
        </div>
    );
};

export default WareHouse;