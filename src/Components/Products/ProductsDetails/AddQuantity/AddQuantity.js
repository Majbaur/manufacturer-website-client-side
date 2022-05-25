import React from 'react';
import { Card, Form } from 'react-bootstrap';
import "./AddQuantity.css"


const AddQuantity = (props) => 
{
    const { reStock } = props;
    return (
       
                                <Form onSubmit={reStock}>
                                    <Form.Group className="w-25 align-middle" controlId="formBasicAmount">
                                        <Form.Control type="text" name='amount' placeholder="Enter your amount" required />
                                    </Form.Group>
                                    <button className='rounded' type="submit">
                                        Submit
                                    </button>
                                </Form>
                            
    );
};

export default AddQuantity;