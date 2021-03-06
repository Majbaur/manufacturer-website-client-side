import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useForm } from 'react-hook-form';

const MyProfile = () => {
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
                <img className='h-12 w-12' src={user?.photoURL} alt="" />
                <input className='w-100 mb-2' type="text"  value={user?.displayName} name="userName" placeholder='useName'{...register("displayName")}/>        
                <input className='mb-2' placeholder='email' value={user?.email} name="email" {...register("email", { required: true})} />
                <input className='mb-2' placeholder='phoneNumber' type="number" {...register("phoneNumber")} />
                <input className='mb-2' placeholder='Address' type="text" {...register("Address")} />
                <input  type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default MyProfile;