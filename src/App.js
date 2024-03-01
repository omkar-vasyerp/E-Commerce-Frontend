
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./components/Navbar/Navbar.css';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import MediaCard from './components/Product/Product'
function App() {
  return (
    <div className="App">
      <Header />    
      <NavBar />
      <MediaCard />
    </div>
  );
}

export default App;
