import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import { IoCartSharp } from "react-icons/io5";


export default function Header() {
  return (
   
            <div className='header'>
                <div className='container'>
                    <div className="row">
                        <div className="col logo">
                            LOGO
                        </div>
                        <div className="col">
                            <form className="input-group">
                                <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                <button type="button" className="btn btn-light" >Search</button>
                            </form>
                        </div>
                        <div className="col">
                        {isLoggedIn ? (
        <Cart />
      ) : (
        <Register />
      )}
                        </div>
                    </div>
                </div>
            </div>
        );

    }
    let isLoggedIn =true;
    function Cart(){
        return(
            <div className='header-right'>
                <div className='cart-icon'>
                <IoCartSharp size={28}/>
                </div>
                <div className='logout-btn'>
               <a href="/" ><button type="button" className="btn btn-light" >Logout</button></a>
                </div>
            </div>
        );
    }
    function Register(){
        return(
            <div className='header-right'>
            <div className='signup-btn'>
               <a href="/" ><button type="button" className="btn btn-danger" >SignUp</button></a>
            </div>
            <div className='login-btn'>
               <a href="/" ><button type="button" className="btn btn-light" >Login</button></a>
            </div>
            </div>
  );
}













