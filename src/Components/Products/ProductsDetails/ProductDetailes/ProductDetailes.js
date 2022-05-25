import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailesTable from '../ProductDetailsTable/ProductDetailesTable';
import "./ProductDetailes.css"
import AddQuantity from './../AddQuantity/AddQuantity';


const ProductDetailes = () => {

    const { id } = useParams();

    const [item, setItem] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])



    // const handleDelivered = () => {
    //     let addItem = { ...item };
    //     addItem.Quantity -= 1
    //     addItem.sale += 1
        

    //     handleItemDelivered(addItem)
    //     setItem(addItem);
    // }

    const handleRestock = (event) => 
    {
        event.preventDefault();

        const amount = event.target.amount.value;
        let addItem = { ...item };
        const newQuantity = parseInt(amount);
        addItem.Quantity -= newQuantity;

        handleItemRestock(addItem)
        
        setItem(addItem)   

    }

    async function handleItemRestock(item)
    {
        const url = `http://localhost:5000/delivered/${id}`;
        fetch(url , {
            method : "PUT",
            headers:
            {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data =>
            {
                console.log(data);
            })
    }

    // const handleItemDelivered = (item) =>
    // {
        
    //     const url = `http://localhost:5000/delivered/${id}`;
    //     fetch(url , {
    //         method : "PUT",
    //         headers:
    //         {
    //             'content-type' : 'application/json'
    //         },
    //         body : JSON.stringify(item)
    //     })
    //     .then(res => res.json())
    //     .then(data =>
    //         {
    //             console.log(data);
    //         })
    // }
    

    return (
        <div className='mar-20'>
            <ProductDetailesTable item={item}></ProductDetailesTable>
            {/* <div className="text-center">
                <button className='deliver-btn' onClick={handleDelivered}>Delivered</button>
             </div> */}
            <AddQuantity reStock ={handleRestock}></AddQuantity> 
        </div>
    );
};

export default ProductDetailes;