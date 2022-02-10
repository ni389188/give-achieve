import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../images/share-my-help-logo.png';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg" className='navbar'>
            <Navbar.Brand>
                <img src={logo} className="nav-logo" alt="Nav bar logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="button-links">
                <Nav className="nav-links">
                    <Button variant="light" href="/" className="button-links">
                        Home
                    </Button>
                </Nav>
                <Nav className="ms-auto">
                    <Button variant="primary" href="/login" className="login-button">
                        Login
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>   
    );
};

export default NavBar;