import { useEffect, useState } from "react";
import { useAppContext } from "../../context/Appcontext";
import ProductList from "../Product/Product";
import { SyncLoader } from "react-spinners";


export default function CategoryWisePage() {
    const { categoryId, setLoading, loading } = useAppContext();
    const [category, setCategory] = useState([])

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8080/category/${categoryId}`)
            .then(response => response.json())
            .then(data => setCategory(data))
            .catch(error => console.error('Error fetching products', error));
        setLoading(false);
    }, [setCategory,setLoading]);
    return (
        <div style={{ marginTop: 57 }}>
            {loading ? (
                <div style={{ textAlign: 'center', marginTop: '250px' }}>
                    <SyncLoader color="#36D7B7" size={15} margin={5} loading={loading} />
                </div>
            ) :(
                <div style={{ maxWidth: "100%", overflow: "hidden" }}>
                    <img src={category.categoryBanner} alt={category.categoryName}
                     style={{ width: "100%", height: "auto"}} 
                    />
                    <ProductList/>
                </div>
            )}
        </div>
    );
}