import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email;
            const currentUser = {email: email};
            if (email) {
                const { data } = await axios.post(`https://shrouded-brushlands-76339.herokuapp.com/login/${ email }`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)

                })
                .then(res => res.json())
                .then(data =>{
                    console.log('Data inside useToken',data);
                    const accessToken=data.token
                    // localStorage.setItem('accessToken',)
                    // setToken(accessToken)
                })
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        // getToken();
    }, [user]);
    return [token];
}

export default useToken;