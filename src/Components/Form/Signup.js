import {createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { Form, Button, Nav  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Signup.css';

const Signup = () => {
    const auth = getAuth();
    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const [error, setError] =useState('');
    const [name,setName] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then (resule => { })
    }

    const handleEmailChange = e => {
        setUserEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setUserPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password minimum 6 Carecter')

        }

        createUserWithEmailAndPassword (auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            setName();
        })
        .catch(error=> {
            setError(error.message);
        })
        
    }
    const { signInUsingGoogle } = useAuth();
    const { signInUsingGithub } = useAuth();
    return (
        <div className="container-fluid my-5">
            <div className="container">
                <div className="form-body col-xl-6 col-md-8 mx-auto my-auto col-sm-12">
                <Form onSubmit={handleRegistration} className="form-bg px-5">
                <Nav className="mx-auto my-4 d-flex justify-content-evenly" >
                    <Nav.Link as={Link} className="text-dark fs-3 fw-bold nav-item-link active" to="/signin">Sign In</Nav.Link>
                    <Nav.Link as={Link} className="text-dark fs-3 fw-bold nav-item-link active" to="/signup">Sign UP</Nav.Link>
                </Nav>
                    <Form.Group className="mb-4 mt-5" controlId="formBasicEmail">
                        <Form.Label className=" fs-3">Full Name</Form.Label>
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter Name" />
                        <Form.Label className="fs-3 mt-3">Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicPassword">
                        <Form.Label className=" fs-3">Password</Form.Label>
                        <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                        <Form.Text variant="danger" className="text-danger">{error}</Form.Text>
                    </Form.Group>

                    <Button variant="primary" className="w-100 fs-3" type="submit">
                        SIGN UP
                    </Button>
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


export default Signup;