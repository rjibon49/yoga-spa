
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import  '../../../GlobalStyle/GlobalStyle.css';

const Header = () => {
  const userCircle = <FontAwesomeIcon icon={faUserCircle} />
    const {user, logout} = useAuth;

    return (
        <>
          <Navbar bg="light" expand="md" sticky="top">
            <Container fluid>
              <Navbar.Brand as={Link} to="/">BrandiHub</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto my-4 my-lg-0" >
                      <Nav.Link as={Link} to="/home">Home</Nav.Link>
                      <Nav.Link as={Link} to="/about">About</Nav.Link>
                      <Nav.Link as={Link} to="/instructors">Instructor</Nav.Link>
                      <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                      {user?.email ?
                      <Button onClick={logout} variant="warning">Logout</Button> :
                      <Nav.Link as={Link} to="/signin">{userCircle}</Nav.Link>}
                      
                      <Navbar.Text>
                        <p className="text-black">Sign In <a href="#login">{user?.displayName}</a></p>
                      </Navbar.Text>

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