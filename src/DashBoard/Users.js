import React from 'react';
import UserRow from './UserRow.js';
import { useQuery } from 'react-query';
import Loading from '../Components/Loading/Loading.js';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://shrouded-brushlands-76339.herokuapp.com/user'
    // , 
    // {
        // method: 'GET',
        // headers:{
        //    authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    // }
    ).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            
            <h2 className='="text-2xl'>All users: {users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;