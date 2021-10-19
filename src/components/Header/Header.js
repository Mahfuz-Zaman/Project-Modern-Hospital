import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "./../../assets/images/logo.png"
import "./Header.css"
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { AllContexts } = useAuth();
    const { user, logOut } = AllContexts;
    const { email, displayName, photoURL } = user;
    return (
        <div>
            <Navbar className="bg-dark" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} className="text-white" to="/home"><img width="70px" src={logo} alt="" /><span className="fs-4">Modern Hospital</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home" className="text-white" >Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/services" className="text-white" >Services</Nav.Link>
                            <Nav.Link as={NavLink} to="/news" className="text-white" >News & Events</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="text-white" >About</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="text-white" >Contact</Nav.Link>
                            {!displayName ? (<> <Nav.Link as={NavLink} to="/login" className="text-white" >Log In</Nav.Link>
                                <Nav.Link as={NavLink} to="/signup" className="text-white" >Sign Up</Nav.Link></>) : (
                                <NavDropdown title={<img style={{ borderRadius: "50%", width: "45px", textColor: "white" }} src={photoURL} alt="" />} >
                                    <div className="text-center">
                                        <h6>{displayName}</h6>
                                        <p className="m-o">{email}</p>
                                        <button onClick={logOut} className="btn btn-primary">Sign Out</button>

                                    </div>

                                </NavDropdown>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;