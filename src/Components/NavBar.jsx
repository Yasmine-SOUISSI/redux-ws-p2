import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NavBarComponent() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Contact App</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Link>
                    <Link to="/contactList">
                        <Nav.Link href="#contactList">ContactList</Nav.Link>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
