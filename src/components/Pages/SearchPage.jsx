import { useLocation } from "react-router-dom";
import { useAppContext } from "../../context/Appcontext";
import ProductList from "../Product/Product";
import './Page.css';
import { useEffect } from "react";


export default function SearchPage(){
const { searchProduct, setSearchProduct  } = useAppContext();
const location =useLocation();

useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let searchProductParam = searchParams.get('search');
    if (searchProductParam === null) {
        // Set searchProductParam to an empty string
        searchProductParam = '';
    }
    setSearchProduct(searchProductParam);
}, [location, setSearchProduct]);


    return(
        <div className="page-content">
        <div className="search-container">
            <div className="search-results">
           <span>Search Results for "{searchProduct}"</span> 
            </div>
        </div>
        <ProductList />
        </div>
    );
}
 