

import React, { useEffect, useState } from "react";


function ProductDetail(){
    const [productDetails, setProductDetail] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/product/1')
            .then(response => response.json())
            .then(data => setProductDetail(data))
            .catch(error => console.error('Error fetching products', error));
    }, [setProductDetail]);
    return(
        <div>
        {productDetails.map(ProductDetail=> (
                <div>hi</div>
            ))}
            
        </div>)
}

export default ProductDetail;