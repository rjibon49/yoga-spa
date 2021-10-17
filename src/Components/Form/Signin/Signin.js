import React from 'react';
import { Form, Button, Nav  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signin = () => {

    const { signInUsingGoogle } = useAuth();

    return (
        <div className="container-fluid mt-5">
            <div className="container">
                <div className="form-body col-xl-6 col-md-8 mx-auto my-auto col-sm-12">
                <Form className="form-bg p-5 mt-5">
                <Nav className="mx-auto my-4 d-flex justify-content-evenly overflow-hidden nav-item-link" >
                    <Nav.Link as={Link} className="text-white fs-3 fw-bold" to="/signin">Sign In</Nav.Link>
                    <Nav.Link as={Link} className="text-white fs-3 fw-bold" to="/signup">Sign UP</Nav.Link>
                </Nav>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-white fs-5">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-white fs-5">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>

                    <Button onClick={signInUsingGoogle} variant="primary">Google</Button>
                </div>
            </div>            
        </div>
    );
};


export default Signin;