
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import './Product.css';
import { SyncLoader } from 'react-spinners';
import { useAppContext } from '../../context/Appcontext';
import CartApi  from '../../service/CartApi';
import { GetProduct } from '../../service/ProductApi';
import { Link} from 'react-router-dom';


const ProductList = () => {
    const { categoryId, searchProduct, loading, setLoading } = useAppContext();
    const [products, setProducts] = useState([]);
    const{AddToCart} =CartApi();
    useEffect(() => {
        setLoading(true);
        GetProduct(categoryId,searchProduct)
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products', error);
                setLoading(false);
            });
    }, [searchProduct, setLoading,categoryId]);

    const handleAddToCart = (productId) => {
        setProducts(prevProducts => prevProducts.map(product => {
            if (product.productId === productId) {
                const updatedProduct = { ...product, addedToCart: !product.addedToCart };
                AddToCart(updatedProduct);
                return updatedProduct;
            }
            return product;
        }));
    };
    
    return (
        <div className='main-container'>
            {loading ? (
                <div style={{ textAlign: 'center', marginTop: '250px' }}>
                    <SyncLoader color="#36D7B7" size={15} margin={5} loading={loading} />
                </div>
            ) : products.length > 0 ? (
                <div className='product-container'>
                    <Grid container spacing={{ xs: 3, md: 2.5 }} columns={{ xs: 4, sm: 8, md: 12 }}
                        direction="row">
                        {products.map(product => (
                            <Grid key={product.productId} item='true'>
                                <Card sx={{ width: 315,  transition: 'transform 0.2s' }}>
                                <Link to={`/product-detail/${product.productId}`}>
                                        <CardMedia
                                            component="img"
                                            height="300"    
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
                                            <Typography gutterBottom variant="h7" component="div">
                                                {product.productName}
                                            </Typography>
                                            {/* <Typography textAlign={'start'} fontSize={15} color="text.secondary">
                                                {/* {product.productSummary} }
                                                <li>highlight no. 1</li>
                                                <li>highlight no. 2</li>
                                            </Typography> */}
                                            <Typography textAlign={'start'}  color="text">
                                                &#8377;{product.price}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                    <CardActions sx={{ justifyContent: 'center', marginTop: -2, marginBottom: 2 }}>
                                        <a className='addCart-btn' href='/' onClick={(e) => {
                                            e.preventDefault();
                                            handleAddToCart(product.productId);
                                        }}>
                                            <Button className='cart-btn' >
                                                Add To Cart
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
