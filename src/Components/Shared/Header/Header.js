import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import  '../../../GlobalStyle/GlobalStyle.css';

const Header = () => {
    const {user, lockDown} = useAuth();

    return (
        <>
          <Navbar bg="light" expand="md" sticky="top">
            <Container fluid>
            <Navbar.Brand className="fs-2" as={Link} to="/">Yoga <i className="fas fa-spa"></i> Spa</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto my-4 my-lg-0 fs-4" >
                      <Nav.Link className="me-2" as={Link} to="/home">Home</Nav.Link>
                      <Nav.Link className="me-2" as={Link} to="/about">About</Nav.Link>
                      <Nav.Link className="me-2" as={Link} to="/instructors">Instructor</Nav.Link>
                      <Nav.Link className="me-2" as={Link} to="/courses">Courses</Nav.Link>
                      {
                        user?.email && <h5 className="m-auto">Welcome ({user.displayName})</h5>
                      }
                      
                      {user.email ? 
                      <button onClick={lockDown} className=" ms-2 me-3 fs-4 bg-transparent border-0 text-secondary">Logout</button> 
                      :
                      <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                       }
                      
                      
                      {/* <Navbar.Text>
                        <p className="text-black">Sign In <a href="#login">{user?.displayName}</a></p>
                      </Navbar.Text> */}

                    </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    );
};

export default Header;