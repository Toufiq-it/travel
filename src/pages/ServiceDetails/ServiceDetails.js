import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ServiceDetails = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail ] = useState('');
    const { serviceId  } = useParams();
    return (

        <div className='container responsive-width w-50 mx-auto'>
            <h2 className='text-primary text-center fw-bold mt-2'>Process Information</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={user?.email} readOnly type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Control type="text" placeholder="Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPHone">
                    <Form.Control type="phone" placeholder="Phone" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                Proceed Checkout
                </Button>
            </Form>
            
        </div>
    );
};

export default ServiceDetails;