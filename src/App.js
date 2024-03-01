
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./components/Navbar/Navbar.css';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import MediaCard from './components/Product/Product'
import { useState } from 'react';
function App() {
  const [searchProduct, setSearchProduct] = useState("");
  return (
    <div className="App">
      <Header searchProduct={searchProduct} setSearchProduct={setSearchProduct} />    
      <NavBar />
      <MediaCard searchProduct={searchProduct} setSearchProduct={setSearchProduct} />
    </div>
  );
}

export default App;
