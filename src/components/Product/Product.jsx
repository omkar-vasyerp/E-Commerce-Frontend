
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
import CartApi from '../../service/CartApi';
import { GetProduct } from '../../service/ProductApi';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';


const ProductList = () => {
    const { categoryId, loading, setLoading } = useAppContext();
    const [products, setProducts] = useState([]);
    const { AddToCart } = CartApi();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let searchProduct = searchParams.get('search');
    if (searchProduct === null) {
        searchProduct = '';
    }
    
    useEffect(() => {
        setLoading(true);
        GetProduct(categoryId, searchProduct)
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products', error);
                setLoading(false);
            });
    }, [ searchProduct,setLoading, categoryId]);

    const handleAddToCart = (productId) => {
        AddToCart(productId);
        toast("Added to Cart");
    };    
    return (
        <>
        
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
                                <Card sx={{ width: 410, height: 460, transition: 'transform 0.2s', backgroundColor: '#191919' }}>
                                    <Link to={`/product-detail/${product.productId}`}>
                                        <CardMedia
                                             height="260" 
                                             sx={{
                                                 p: 2,
                                                 width:'300',
                                                 borderRadius: 5,
                                                 backgroundColor: '#393939', 
                                                 transition: 'transform 0.2s'
                                             }}
                                             
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        >
                                            <div><img height={225} src={product.productImage} alt="" /></div>
                                        </CardMedia>
                                        <CardContent style={{ backgroundColor: '#191919', color: 'white' }}>
                                            <Typography className='product-name' gutterBottom variant="h7" component="div">
                                                {product.productName}
                                            </Typography>
                                            {/* <Typography textAlign={'start'} fontSize={15} color="text.secondary">
                                                {/* {product.productSummary} }
                                                <li>highlight no. 1</li>
                                                <li>highlight no. 2</li>
                                            </Typography> */}
                                            <Typography textAlign={'start'} color="text">
                                                &#8377;{product.price}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                    <CardActions sx={{ justifyContent: 'center', marginTop: -2, backgroundColor: '#191919' }}>
                                        <Link className='addCart-btn' onClick={(e) => {

                                            handleAddToCart(product.productId);
                                        }}>
                                            <Button className='cart-btn' >
                                                Add To Cart
                                            </Button>
                                        </Link>
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
        </>
    );
};


export default ProductList;
