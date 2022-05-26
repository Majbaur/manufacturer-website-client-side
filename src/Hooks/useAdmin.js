import React, { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setadminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://shrouded-brushlands-76339.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                 setAdmin(data.admin);
                 setadminLoading(false);
                })

        }
    }, [user])
    return [admin, adminLoading]
};

export default useAdmin;
