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
                <img src={logo} className="navbar--logo" alt="Nav bar logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="navbar--links">
                    <Button variant="light" href="/" className="navbar--home">
                        Home
                    </Button>
                </Nav>
                <Nav className="ms-auto">
                    <Button variant="primary" href="/login" className="navbar--login">
                        Login
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>   
    );
};

export default NavBar;