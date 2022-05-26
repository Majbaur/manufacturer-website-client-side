import { useEffect, useState } from 'react';

const GetProducts = (page , size) => 
{
    const [products , setProducts] = useState([])

    useEffect(()=>
    {
        fetch(`https://shrouded-brushlands-76339.herokuapp.com/items?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    } , [page , size])

    return [products , setProducts]
};

export default GetProducts;