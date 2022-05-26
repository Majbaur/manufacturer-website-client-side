
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myorders, setMyorders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch('https://shrouded-brushlands-76339.herokuapp.com/myorder')
                .then(res => res.json())
                .then(data => setMyorders(data));
        }
    }, [user])
    return (
        <div>
            This is My Orders: {myorders.length}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.inventory}</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;


