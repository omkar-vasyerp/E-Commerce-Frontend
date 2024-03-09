
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar/Navbar.css';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import SignUp from './components/Forms/SignUp';
import ProductList from './components/Product/Product';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { AppProvider } from './context/Appcontext';
import Login from './components/Forms/Login';
import ProductDetail from './components/ProductDetail/ProductDetail';
import MyOrder from './components/Order/MyOrder';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
      <AppProvider>
        <Header  />
        <NavBar />
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path='/login' element={<Login />}/>
          <Route path="/" element={<ProductList  />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/my-orders" element={<MyOrder />} />
        </Routes>
        </AppProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
