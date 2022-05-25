import React from 'react';
import { Card, Form } from 'react-bootstrap';
import "./AddQuantity.css"


const AddQuantity = (props) => 
{
    const { reStock } = props;
    return (
        <div className='mar-20'>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 col-12 mx-auto">
                        <h3>Want to restock the Product item? click here</h3>
                        <Card className='mx-auto my-5 border-0 shadow-lg text-center rounded-lg p-5' id="restock-card">
                            <Card.Body>

                                <Card.Title>Restock here</Card.Title>
                                <Card.Text>
                                    <Card.Subtitle className="mb-5 mt-3">Enter the amount of new arrived stock</Card.Subtitle>
                                </Card.Text>
                                <Form onSubmit={reStock}>
                                    <Form.Group className="mb-5" controlId="formBasicAmount">
                                        <Form.Control type="text" name='amount' placeholder="Enter your amount" required />
                                    </Form.Group>
                                    <button className='rounded' type="submit">
                                        Submit
                                    </button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddQuantity;