import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const [product, setProduct] = useState()
    const { id } = useParams();         
    useEffect(() => {
        fetch(`http://localhost:8080/product/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching products', error));

    }, [setProduct]);
    return (
        <>
            {product ? (
        <div>
          <img src={product.productImage} alt="Product" />
          {/* Render other product details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
            
        </>
    )
}

export default ProductDetail;