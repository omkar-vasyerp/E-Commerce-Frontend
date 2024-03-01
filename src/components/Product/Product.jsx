
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import img from "../../img/mobile.jpeg"
import './Product.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/product')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products', error));
    }, []);



    return (
        <div className='main-container'>
            {products.length > 0 ? (
                <div className='product-container'>
                    <Grid container spacing={3}>
                        {products.map(product => (
                            <Grid  key={product.id} item xs={12} md={4}>
                                <Card className='card' md={4} sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        // component="image"
                                        sx={{ height: 250, width : 350 }}
                                        image={img}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.productName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <h5>{product.productSummary}</h5>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button>Share</Button>
                                        <Button >Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ) : (
                <p>No products available</p>
            )}
        </div>

    );
};

export default ProductList;


// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }