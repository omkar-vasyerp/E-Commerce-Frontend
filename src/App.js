
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar/Navbar.css';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';

import { useState } from 'react';
import SignUp from './components/Forms/SignUp';
import ProductList from './components/Product/Product';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
function App() {
  const [searchProduct, setSearchProduct] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Header searchProduct={searchProduct} setSearchProduct={setSearchProduct} />
        <NavBar categoryId={categoryId} setCategoryId={setCategoryId}/>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<ProductList categoryId={categoryId} setCategoryId={setCategoryId} searchProduct={searchProduct} setSearchProduct={setSearchProduct} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
