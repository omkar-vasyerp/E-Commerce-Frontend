import React from "react";
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './Navbar.css';

export default function NavBar() {
    return (
        <>
            <Navbar className="navbar" expand="md">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Categories</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Laptop</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Mobile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Camera</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Accessories</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>);
}
