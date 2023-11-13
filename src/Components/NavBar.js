import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">S.R.</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                        <Nav.Link href="/contact">Contact Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        
        // <div>
        //     <div className="h-[50px] bg-gray-700">
        //         <div className="flex p-1 justify-end text-align mr-2">
        //             <button className="transition-all hover:bg-slate-600 border-1 mt-1 p-1 text-gray-200">Home</button>
        //             <button className="ml-4 transition-all hover:bg-slate-600 border-1 mt-1 p-1 text-gray-200">Gallery</button>
        //             <button className="ml-4 transition-all hover:bg-slate-600 border-1 mt-1 p-1 text-gray-200">Contact Me</button>
        //         </div>
        //     </div>
        // </div>
    )
}

export default NavBar
