import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../GlobalStyle/GlobalStyle.css';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark py-5">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <Navbar.Brand className="fs-2" as={Link} to="/">Yoga <i className="fas fa-spa"></i> Spa</Navbar.Brand>
                            <Nav className="mx-auto my-4 my-lg-0 fs-4" >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/instructors">Instructor</Nav.Link>
                            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                        </Nav>
                                    
                        <span className="fs-3 text-white">
                            <i className="me-4 fab fa-twitter"></i>
                            <i className="me-4 fab fa-facebook"></i>
                            <i className="me-4 fab fa-instagram"></i>
                            <i className="me-4 fab fa-youtube"></i>
                            <i className="me-4 fab fa-linkedin"></i>
                        </span>
                </div>
                <hr className="bg-light" />
            </div>
            <div className="text-center footer">
                <p className="text-white"> Design & Develop by 
                <a className="" href="https://www.linkedin.com/in/rayhanhossainjibon/"> Md. Raihan Hossain Jibon</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;