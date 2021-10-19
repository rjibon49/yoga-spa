import {signInWithEmailAndPassword , getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { Form, Button, Nav  } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signin = () => {
    const auth = getAuth();
    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const [error, setError] =useState('');

    const handleEmailChange = e => {
        setUserEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setUserPassword(e.target.value);
    }

    const handleRegistration = e => {
        console.log(email, password);
        signInWithEmailAndPassword  (auth, email,password)
        .then((result) => {
        const user = result.user;
        console.log(user);
        })
        .catch((error) => {
            setError(error.message);
        });
        e.preventDefault();
    }

    const { signInUsingGoogle } = useAuth();
    const { signInUsingGithub } = useAuth();

    return (
        <div className="container-fluid my-5">
            <div className="container">
                <div className="form-body col-xl-6 col-md-8 mx-auto my-auto col-sm-12">
                    <h1 className="text-center">{error}</h1>
                <Form className="form-bg px-5" onSubmit={handleRegistration}>
                    <Nav className="mx-auto my-4 d-flex justify-content-evenly overflow-hidden nav-item-link" >
                        <Nav.Link as={Link} className="text-dark fs-3 fw-bold" to="/signin">Sign In</Nav.Link>
                        <Nav.Link as={Link} className="text-dark fs-3 fw-bold" to="/signup">Sign UP</Nav.Link>
                    </Nav>
                    <Form.Group className="mb-4 mt-5" controlId="formBasicEmail">
                        <Form.Label className="fs-3">Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fs-3">Password</Form.Label>
                        <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" className="w-100 fs-3" type="submit">
                        <strong>SIGN IN</strong> 
                    </Button>
                    <Form.Text variant="danger" className="text-danger">{error}</Form.Text>
                </Form>
                    <div className="text-center my-5 pb-5">
                        <Button onClick={signInUsingGoogle} variant="dark" className="me-3 fs-4"><i className="fab fa-google"></i> Google Sign In</Button>
                        <Button onClick={signInUsingGithub} variant="dark" className="me-3 fs-4"><i className="fab fa-github"></i> Github Sign In</Button>
                    </div>
                    
                </div>
            </div>            
        </div>
    );
};


export default Signin;