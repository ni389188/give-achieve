import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../images/share-my-help-logo.png';

function NavBar() {
    return (
        <Navbar sticky="top" fixed="top" bg="dark" variant="dark" expand="lg">
            <div>
                <Navbar.Brand>
                    <img style={{ width: 50, height: 50 }} src={logo} alt="" />
                </Navbar.Brand>
            </div>
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button href="/login">Login</Button>;
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;