import { useEffect, useState } from "react";

const useServices = () =>{
    const [inventorys, setInventorys] = useState([]);

    useEffect( ()=>{
        fetch('https://shrouded-brushlands-76339.herokuapp.com/item')
        .then(res => res.json())
        .then(data => setInventorys(data));
    }, []);
    return [inventorys, setInventorys]
}

export default useServices;
