import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DarkMode from '../darkMode/darkMode';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Navbar.Brand href="/">
                <img src="/imgs/logo.jpg" alt="Seu Logo" className="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='custom-toggle'/>
            <Navbar.Collapse id="responsive-navbar-nav" className="custom-collapse">
                <Nav className="ml-auto custom-nav">
                    <Nav.Link href="/">Início</Nav.Link>
                    <Nav.Link href="/sobreMim">Sobre Mim</Nav.Link>
                    <Nav.Link href="/projetos">Projetos</Nav.Link>
                    <Nav.Link href="/contato">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div className='darkMode'>
                <div className='text-DarkMode'>Dark Mode</div>
                <DarkMode />
            </div>
        </Navbar>
    );
}
