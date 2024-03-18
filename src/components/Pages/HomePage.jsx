import { Link } from "react-router-dom";
import { useAppContext } from "../../context/Appcontext";
import { useEffect, useState} from "react";
import ProductList from "../Product/Product";

export default function HomePage() {

    const { setCategoryId } = useAppContext();
    const [category, setCategory] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:8080/category')
            .then(response => response.json())
            .then(data => setCategory(data))
            .catch(error => console.error('Error fetching products', error));
    }, [setCategory]);
    return (
        <>
        <div style={{ marginTop: 57, display: 'flex', backgroundColor: 'black', justifyContent: 'center', paddingTop: 50 }}>

            {category.map(category => (
                <div>
                    {/* <Link to="/" onClick={() => setCategoryId(category.categoryId)}></Link> */}
                    <Link  to={`/${category.categoryName}`}>
                    <img 
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                     style={{ height: 150, width: 140 }} 
                     onClick={() => setCategoryId(category.categoryId)}
                     src={category.categoryImage} 
                     alt={category.categoryName} /></Link>
                </div>

))}
        </div>
        <ProductList />
</>
        
    );
}