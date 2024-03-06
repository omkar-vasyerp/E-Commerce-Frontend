import './Cart.css';
import React, { useEffect, useState } from 'react';
import { Container, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useAppContext } from '../../context/Appcontext';
import { SyncLoader } from 'react-spinners';
import { getCartDetails, removeFromCart } from '../../service/CartApi';
export default function Cart() {

    const { loading, setLoading } = useAppContext();
    const [cartDetails, setCartDetails] = useState([]);
    const [cartUpdated, setCartUpdated] = useState(false);

    const getCart=()=>{
        getCartDetails()
        .then(data => {
            setCartDetails(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching Cart', error);
            setLoading(false);
        });
    }

    useEffect(() => {
        setLoading(true);
        getCart()
    }, [cartUpdated]);
    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        setCartUpdated(prevState => !prevState);
    };

    useEffect(() => {
        if (cartUpdated) {
            getCart()
        }
    }, [cartUpdated, setLoading]);

    return (
        <div className='cart-container'>
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: 16, marginTop: 64 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Shopping Cart
                    </Typography>
                    {loading ? (
                        <div style={{ textAlign: 'center', marginTop: '150px' }}>
                            <SyncLoader color="#36D7B7" size={15} margin={5} loading={loading} />
                        </div>
                    ) : cartDetails && cartDetails.cartItems && cartDetails.cartItems.length > 0 ? (
                        <>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell>Product Name</TableCell>
                                            <TableCell>Quantity</TableCell>
                                            <TableCell>Unit Price</TableCell>
                                            <TableCell>Total Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cartDetails.cartItems.map((item) => (
                                            <TableRow key={item.productId}>
                                                <TableCell>
                                                    <img src={item.productImage} alt={item.productName} style={{ width: '50px', borderRadius: 8 }} />
                                                </TableCell>
                                                <TableCell>{item.productName}</TableCell>
                                                <TableCell>{item.quantity}</TableCell>
                                                <TableCell>${item.unitPrice.toFixed(2)}</TableCell>
                                                <TableCell>${item.price.toFixed(2)}</TableCell>
                                                <TableCell onClick={() => handleRemoveFromCart(item.productId)}> <Button variant="outlined" color="secondary">
                                                    Remove
                                                </Button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Typography variant="h6" style={{ marginTop: 16, marginRight: 100, textAlign: 'end' }}>
                                Total Items: {cartDetails.totalQuantities}
                            </Typography>
                            <Typography variant="h6" style={{ marginRight: 100, textAlign: 'end' }}>Total Price: ${cartDetails.totalPrice.toFixed(2)}</Typography>
                            <Button variant="contained" color="primary" style={{ marginTop: 16 }}>
                                Checkout
                            </Button>
                        </>
                    ) : (
                        <Typography variant="body1">Your cart is empty.</Typography>
                    )}
                </Paper>
            </Container>

        </div>
    );
}