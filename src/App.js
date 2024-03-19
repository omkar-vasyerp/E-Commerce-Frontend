
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar/Navbar.css';
import Header from './components/Header/Header';
import SignUp from './components/Forms/SignUp';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { AppProvider } from './context/Appcontext';
import Login from './components/Forms/Login';
import ProductDetail from './components/ProductDetail/ProductDetail';
import MyOrder from './components/Order/MyOrder';
import { AuthProvider } from './context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import HomePage from './components/Pages/HomePage';
import CategoryWisePage from './components/Pages/CategoryWisePage';
import SearchPage from './components/Pages/SearchPage';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
      <AuthProvider>
      <AppProvider>
        <Header  />
        {/* <NavBar /> */}
          
        <Routes>
        
          <Route path="/sign-up" element={<SignUp />} />
          <Route path='/login' element={<Login />}/>
          <Route path="/" element={<HomePage  />} />
          <Route path="/search" element={<SearchPage  />} />
          <Route path="/:name" element={<CategoryWisePage />} />
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
