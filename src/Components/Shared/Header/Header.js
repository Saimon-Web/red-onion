import React from 'react';
import logo from '../../images/logo2.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className='logo' alt="" />
                </Navbar.Brand>
                <Navbar.Toggle className='toggle' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='menu-list ms-auto '>
                        <Nav.Link className='text-dark
                        ' href="#shopcart">< FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </Nav.Link>
                        <Nav.Link className='text-dark 
                        ' as={Link} to="/products">products</Nav.Link>

                        <Nav.Link className='text-dark
                        ' href="#deets">log in</Nav.Link>
                        <Nav.Link className='special text-white' eventKey={2} href="#memes">
                            sign out
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;