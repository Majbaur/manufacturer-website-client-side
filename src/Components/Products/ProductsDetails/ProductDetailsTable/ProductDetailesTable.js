import React from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from './../../../../firebase.init';

const ProductDetailesTable = (props) => 
{


    const { item  } = props;
    const { name ,price , Quantity , _id , Supplier , sale , img } = item;
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
        <div>
              {/* <input className='w-100 mb-2' type="text"  value={user?.displayName} name="userName" placeholder='useName'{...register("displayName")}/>        
              <input className='mb-2' placeholder='email' value={user?.email} name="email" {...register("email", { required: true})} /> */}
            <h2 className="text-center">Product Detailes</h2>
            <section>
                <div className="container">
                    <div className="row p-5 g-5">
                        <div className="col-md-4 col-12 ">
                            <img src={img} className="w-100 h-75" alt="" />
                        </div>
                        <div className="col-md-8 col-12 ">
                                <div className=''>
                                
                                       
                                        <h4>Name:  {user?.displayName}</h4>
                                        <h4>Email:  {user?.email}</h4>
                                  
                                </div>
                            <Table striped bordered hover className='p-5 text-center'>
                                <thead>
                                    <tr>
                                        <th>Sl no.</th>
                                        <th>Properties</th>
                                        <th>Value</th>

                                    </tr>
                                </thead>
                                <tbody className='table-body'>
                                    <tr>
                                        <td>1</td>
                                        <td>Id</td>
                                        <td>{_id}</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Name</td>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Price</td>
                                        <td>{price}</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Quantity</td>
                                        <td>{Quantity}</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Supplier Name</td>
                                        <td>{Supplier}</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Sale</td>
                                        <td>{sale}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>

                

            </section>
        </div>
    );
};

export default ProductDetailesTable;