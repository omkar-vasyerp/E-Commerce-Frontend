import React, { useState ,useEffect, useContext} from "react";
import {
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/Appcontext";

export default function NavBar() {
    const { categoryId, setCategoryId } = useAppContext();

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
                <Nav className="mr-auto" navbar>

                    <NavItem>
                        <Link to="/" onClick={()=>setCategoryId(0)} >Home</Link>
                    </NavItem>
                {categories.map(category=> (
                    <NavItem>
                        <Link to="/" onClick={()=>setCategoryId(category.categoryId)}>{category.categoryName}</Link>
                    </NavItem>
        
        ))}
                </Nav>
            </Navbar>
        </>)
}
