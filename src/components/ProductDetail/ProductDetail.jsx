import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/Appcontext";
import { SyncLoader } from "react-spinners";
import './ProductDetail.css';
const ProductDetail = () => {
    const [product, setProduct] = useState()
    const {  loading, setLoading } = useAppContext();
    const { id } = useParams();         
    useEffect(() => {
        fetch(`http://localhost:8080/product/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching products', error));
            setLoading(false)
    }, [setProduct]);
    return (
      <div style={{ marginTop: '250px' }}>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <SyncLoader color="#36D7B7" size={15} margin={5} loading={loading} />
        </div>
      ) : product ?(
        <div className="productPage">
        <div className="col">
          <img src={product.productImage}></img>
        </div >
        <div className="col">
          {product.productName}
        </div >
        </div>
      ):(
        <p>Error</p>
      )}

    </div>
    )
}

export default ProductDetail;