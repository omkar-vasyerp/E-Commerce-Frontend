
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import './Product.css';

const ProductList = ({searchProduct, setSearchProduct,categoryId, setCategoryId }) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8080/product?categoryId=' +categoryId + '&searchKey=' + searchProduct)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products', error));
    }, [searchProduct,categoryId]);

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
                    <Grid container spacing={{ xs: 3, md: 2.5 }} columns={{xs: 4, sm: 8, md: 12}}
                        direction="row">
                        {products.map(product => (
                            <Grid key={product.productId} item='true'>
                                <Card sx={{ width: 275, maxHeight:485, transition: 'transform 0.2s' }}>
                                    <a href={`/product/${product.productId}`} >
                                        <CardMedia
                                            component="img"
                                            height="245"
                                            image={product.productImage}
                                            sx={{
                                                objectFit: 'cover',
                                                p: 2,
                                                transition: 'transform 0.2s'  // Apply the transition to the image as well
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                        <CardContent >
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product.productName}
                                            </Typography>
                                            <Typography textAlign={'start'} color="text.secondary">
                                                {product.productSummary}
                                            </Typography>
                                            <Typography textAlign={'start'} color="text">
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
