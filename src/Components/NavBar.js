import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <button href="/" className='flex justify-center align-top text-gray-300 text-2xl'>S.R.</button>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                        <Nav.Link href="/contact">Contact Me</Nav.Link> 
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
