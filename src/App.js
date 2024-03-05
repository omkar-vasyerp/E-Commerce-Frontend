
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar/Navbar.css';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';


import { createContext, useState } from 'react';
import SignUp from './components/Forms/SignUp';
import ProductList from './components/Product/Product';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { AppProvider } from './context/Appcontext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppProvider>
        <Header  />
        <NavBar />
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<ProductList  />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
