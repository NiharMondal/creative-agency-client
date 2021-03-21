import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import './Header.css';
const Header = () => {

   return (
      <Navbar expand="lg" className="navbar">
         <Navbar.Brand href="#home">
            <Link to="/" className="logo_wrapper ml-5">
               <img className="logo" src={logo} alt=""/>
            </Link>
      </Navbar.Brand>
         <Navbar.Toggle
            aria-controls="basic-navbar-nav"
         />
         <Navbar.Collapse
            id="basic-navbar-nav">
            <Nav className="ml-auto">
               <Nav.Link  >
                  <NavLink
                     className="link" activeClassName="active_link" exact to="/">Home
                  </NavLink>
               </Nav.Link>
               <Nav.Link>
                  <NavLink
                     className="link" activeClassName="active_link" to="/portfolio">Our Portfolio
                  </NavLink>
               </Nav.Link>
               <Nav.Link>
                  <NavLink
                     className="link" activeClassName="active_link" to="/our-team">Our Team
                  </NavLink>
               </Nav.Link>
               <Nav.Link>
                  <NavLink
                     className="link mr-3" activeClassName="active_link" to="/contact-us">Contact Us
                  </NavLink>
               </Nav.Link >
               <NavLink to="/auth" className="mr-5">
                  <Button variant="dark">
                     LOGIN
                  </Button>
               </NavLink>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default Header;