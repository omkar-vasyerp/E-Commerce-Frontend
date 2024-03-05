import React, { useState ,useEffect} from "react";
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './Navbar.css';
import { Link } from "react-router-dom";

export default function NavBar({categoryId, setCategoryId}) {

    const [categories, setcategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/category')
            .then(response => response.json())
            .then(data => setcategory(data))
            .catch(error => console.error('Error fetching products', error));
    }, []);

    
    return (
        <>
            <Navbar className="navbar" expand="md">
                {categories.map(category=> (
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/" onClick={()=>setCategoryId(category.categoryId)}>{category.categoryName}</Link>
                    </NavItem>
        
                </Nav>
                    ))}
            </Navbar>
        </>)
}
