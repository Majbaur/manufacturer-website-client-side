import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init.js';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
            <Outlet></Outlet>
        </div>
        <div className="drawer-side">
            <label for="dashboard-sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                {admin && <li><Link to="/dashboard"> All Orders</Link></li>}
                <li><Link to="/dashboard/myorder"> My Orders</Link></li>
                <li><Link to="/dashboard/review">My Reviews</Link></li>
                <li><Link to="/dashboard/profile">My Profile</Link></li>
                { admin && <li><Link to="/dashboard/manageInventories">All Product</Link></li>}
                {admin && <li><Link to="/dashboard/addItem">Add Product</Link></li>}
                {admin && <li><Link to="/dashboard/users">Add Admin</Link></li>}
            </ul>

        </div>
    </div>
    );
};

export default DashBoard;