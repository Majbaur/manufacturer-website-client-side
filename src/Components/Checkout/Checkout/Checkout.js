import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import useInventoryDetail from './../../../Hooks/useInventoryDetail';

const Checkout = () => {
    const {inventoryId} = useParams();
    const [inventorys] = useInventoryDetail(inventoryId);
    const [user] = useAuthState(auth);
    
    // const [user, setUser] = useState({
    //     name: 'Akbar The Great',
    //     email: 'akbar@momo.taj',
    //     address: 'Tajmohol Road Md.pur',
    //     phone: '01711111111'
    // });

    // const handleAddressChange = event =>{
    //     console.log(event.target.value);
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     console.log(newUser);
    //     setUser(newUser);
    // }

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            name:user.displayName,
            inventory: inventorys.name,
            inventoryId: inventorys,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://shrouded-brushlands-76339.herokuapp.com/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {inventorys.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={inventorys.name} name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;