import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import { IoCartSharp } from "react-icons/io5";
import { useAppContext } from '../../context/Appcontext';
import Account from '../Account/Account';
import { useNavigate } from 'react-router-dom';


export default function Header() {
    const { searchProduct, setSearchProduct,cartDetails, setCartDetails,setCategoryId } = useAppContext();
    const [cartCount, setCartCount] = useState(1);

    let isLoggedIn = true;
    const navigate = useNavigate();

    

    return (
        <div className='header'>
            <div className='container'>
                <div className="row">
                    <div className="col logo" >
                        <span onClick={()=>{navigate("/"); setCategoryId(0);}}>LOGO</span>
                    </div>
                    <div className="col header-right">
                        <div>
                        <form className="input-group">
                            <input value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" name='search' />
                            <button type="button" className="btn btn-light"  >Search</button>
                        </form>
                        </div>
                        <div >
                        {isLoggedIn ? (
                            <Cart />
                        ) : (
                            <Register />
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    

    function Cart() {
        const handleClick = () => {
            navigate("/cart");
        }
        return (
            <div className='header-icons'>
                <div className='cart-icon' onClick={handleClick}>
                    <IoCartSharp size={28} />
                    {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
                </div>
                <Account />
            </div>
        );
    }

    function Register() {
        return (
            <div className='header-icons'>
                <Account />
              
            </div>
        );
    }

}










