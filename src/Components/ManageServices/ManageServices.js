import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [inventorys, setInventorys] = useServices();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = inventorys.filter(inventory => inventory._id !== id);
                setInventorys(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                inventorys.map(inventory => <div key={inventory._id}>
                    <h5>{inventorys.name} <button onClick={() => handleDelete(inventory._id)}>X</button></h5>
                    
                </div>)
            }
        </div>
    );
};

export default ManageServices;