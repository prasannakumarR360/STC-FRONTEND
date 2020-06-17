import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const NavigationBar = () => (
    <Container fluid className="wrapper bgPrimary p-0">
        <Navbar expand="lg" className="navbar px-70">
            <Navbar.Brand><Link to="/"><Image src="/images/icons/transparent.svg" className="mr-5 logo" fluid alt="STC" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link to="/movies" className="nav-link">Movies</Link>
                    <Link to="/Events" className="nav-link">Events</Link>
                    <Link to="/sportsListing" className="nav-link">Sports</Link>
                    <Link to="/LeisureListing" className="nav-link">Leisure</Link>
                    <Link to="/businessListing" className="nav-link">Business</Link>
                    <Link to="/DownloadTicket" className="nav-link">DownloadTicket</Link>
                </Nav>
                <Nav className="ml-auto">
                    <Link to="/"><Image src="/images/icons/search.svg" className="iconMenu mt-3" alt="Search Icon" /></Link>
                    <Link to="/businessListing" className="nav-link d-none">My Booking</Link>
                    <NavDropdown id="collasible-nav-dropdown" className="profilePic ml-4 mt-1">
                        <NavDropdown.Item href="/EditProfile">Edit Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/ChangePassword">Change Password</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/SignIn" className="nav-link signInBtn">Sign in</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
);

export default NavigationBar;