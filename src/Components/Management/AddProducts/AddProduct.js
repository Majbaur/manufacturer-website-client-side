import React from 'react';
import { useForm } from "react-hook-form";
//majba
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    if(user){
        console.log(user)
    }
        const onSubmit = data => {
            
        console.log(data);
        const url = `https://shrouded-brushlands-76339.herokuapp.com/addedItem`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
        })
    };
    console.log('user',user.displayName);
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a Service</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-100 mb-2' type="text"  value={user?.displayName} name="userName" placeholder='useName'{...register("displayName")}/>        
                <input className='mb-2' placeholder='email' value={user?.email} name="email" {...register("email", { required: true})} />
                <input className='w-100 mb-2' type="text"  name="productname" placeholder='Product Name'{...register("name")}/>
                <input className='mb-2' placeholder='Price' name="price"  type="number" {...register("price")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Supplier' {...register("Supplier", { required: true})} />
                <input className='mb-2' placeholder='sale' type="number" {...register("sale")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("Quantity")} />
                <input  type="submit" value="Add product" />
            </form>
        </div>
    );
};

export default AddProduct;