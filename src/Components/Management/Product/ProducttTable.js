import React from 'react';
import { Table } from 'react-bootstrap';

const ProducttTable = (props) => 
{
    const {item} = props;
    const {name, _id , sale , Supplier , Quantity ,description , price} = item;

    const userTable = <tr><td>8</td><td>User Email</td><td>{item.user_Email}</td>
</tr>

    return (
        <div>
            <Table  responsive bordered hover className=' p-5'>
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Property</th>
                        <th>value</th>
                    </tr>
                </thead>
                <tbody>
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
                        <td>Supplier</td>
                        <td>{Supplier}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>sale</td>
                        <td>{sale}</td>
                    </tr>
                    {
                        item.user_Name ? userTable : null
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ProducttTable;