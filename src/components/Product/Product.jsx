
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
// import Grid from '@mui/material/Grid';
import Grid from '@mui/material/Unstable_Grid2';
// import img from "../../img/mobile.jpeg"
import './Product.css';

const ProductList = ({ searchProduct, setSearchProduct }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/product?categoryId=0&searchKey=' + searchProduct)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products', error));
    }, [searchProduct]);


    const handleAddToCart = (productId) => {
        setProducts(prevProducts => prevProducts.map(product => {
            if (product.productId === productId) {
                return { ...product, addedToCart: !product.addedToCart };
            }
            return product;
        }));
    };
    return (

        <div className='main-container'>
            {products.length > 0 ? (
                <div className='product-container'>
                    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.map(product => (
                            <Grid key={product.productId} item xs={6} sm={4} md={4} >
                                <Card sx={{ maxWidth: 305, borderRadius: 12,transition: 'transform 0.2s' }}>
                                    <a href={`/product/${product.productId}`} >
                                        <CardMedia
                                            component="img"
                                            // height="394"
                                            image={product.productImage}
                                            sx={{
                                                objectFit: 'cover',
                                                p: 2,
                                                borderRadius: 12,
                                                transition: 'transform 0.2s'  // Apply the transition to the image as well
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                        <CardContent >
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product.productName}
                                            </Typography>
                                            <Typography variant="h6" textAlign={'start'} color="text.secondary">
                                                {product.productSummary}
                                            </Typography>
                                            <Typography variant="h6" textAlign={'start'} color="text.secondary">
                                                {"$" + product.price}
                                            </Typography>
                                        </CardContent>
                                    </a>
                                    <CardActions sx={{ justifyContent: 'center', marginTop: -2, marginBottom: 2 }}>
                                        <a className='addCart-btn' href='/' onClick={(e) => {
                                            e.preventDefault();
                                            handleAddToCart(product.productId);
                                        }}>
                                            <Button className='cart-btn' >
                                                {product.addedToCart ? 'Added To Cart' : 'Add To Cart'}
                                            </Button>
                                        </a>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ) : (
                <p>No products available right now !!!</p>
            )}
        </div>

    );
};


export default ProductList;
