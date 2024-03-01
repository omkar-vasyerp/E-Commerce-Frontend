
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
// import Grid from '@mui/material/Grid';
import Grid from '@mui/material/Unstable_Grid2';
import img from "../../img/mobile.jpeg"
import './Product.css';

const ProductList = ({ searchProduct, setSearchProduct }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/product?searchKey=' + searchProduct)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products', error));
    }, [searchProduct]);

    return (
        <div className='main-container'>
            {products.length > 0 ? (
                <div className='product-container'>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.map(product => (
                            <Grid key={product.id}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="194"
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
                <p>No products available right now !!!</p>
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