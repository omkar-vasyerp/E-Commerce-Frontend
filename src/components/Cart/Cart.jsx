import './Cart.css';
import React, { useEffect, useState } from 'react';
import { Container, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider } from '@mui/material';
import { useAppContext } from '../../context/Appcontext';
import { SyncLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import CartApi from '../../service/CartApi';
import OrderApi from '../../service/OrderApi';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
export default function Cart() {

    const { loading, setLoading, cartDetails, setCartDetails } = useAppContext();
    const [cartUpdated, setCartUpdated] = useState(false);
    const { RemoveFromCart, GetCartDetails, AddToCart , SubtractFromCart} = CartApi();
    const navigate = useNavigate();
    const { PlaceOrder } = OrderApi();
    const getCart = () => {
        GetCartDetails()
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
        RemoveFromCart(productId);
        setCartUpdated(prevState => !prevState);
    };

    const handleAddToCart = (productId) => {
        AddToCart(productId);
        setCartUpdated(prevState => !prevState);
    };
    const handleSubtractFromCart = (productId) => {
        SubtractFromCart(productId);
        setCartUpdated(prevState => !prevState);
    };
    useEffect(() => {
        if (cartUpdated) {
            getCart()
        }
    }, [cartUpdated, setLoading]);

    const checkOutOrder = () => {
        PlaceOrder(cartDetails, navigate);
    }

    return (
        <div className='cart-container'>
            <Container>
                {/* <Paper elevation={3} style={{ padding: 16, marginTop: 64}}> */}
                <Typography variant="h5" align="center" gutterBottom>
                    Shopping Cart
                </Typography>
                {loading ? (
                    <div style={{ textAlign: 'center', marginTop: '150px' }}>
                        <SyncLoader color="#36D7B7" size={15} margin={5} loading={loading} />
                    </div>
                ) : cartDetails && cartDetails.cartItems && cartDetails.cartItems.length > 0 ? (
                    <>
                        <div style={{ display: 'flex', alignItems: 'center' }}>

                            <div >
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell></TableCell>
                                                <TableCell>Product Name</TableCell>
                                                <TableCell  style={{textAlign:'center'}}>Quantity</TableCell>
                                                <TableCell>Unit Price</TableCell>
                                                <TableCell>Total Price</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cartDetails.cartItems.map((item) => (
                                                <TableRow key={item.productId}>
                                                    <TableCell>
                                                        <img src={item.productImage} alt={item.productImage} style={{ width: '50px', borderRadius: 8 }} />
                                                    </TableCell>
                                                    <TableCell>{item.productName}</TableCell>
                                                    <TableCell >
                                                        <div className='qauntity'>
                                                        <button  onClick={()=>handleSubtractFromCart(item.productId)} disabled={item.quantity === 1}><IndeterminateCheckBoxIcon  /></button>
                                                       <span> {item.quantity}</span>
                                                        <button  onClick={()=>handleAddToCart(item.productId)}><AddBoxIcon /></button>
                                                        </div> 
                                                        </TableCell>
                                                    <TableCell>&#8377;{item.unitPrice.toFixed(2)}</TableCell>
                                                    <TableCell>&#8377;{item.price.toFixed(2)}</TableCell>
                                                    <TableCell onClick={() => handleRemoveFromCart(item.productId)}> <Button variant="outlined" color="secondary">
                                                        Remove
                                                    </Button></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            <Divider orientation="vertical" />
                            <div style={{paddingLeft:15}} >
                                <div >
                                    Total Items: {cartDetails.totalQuantities}
                                </div>
                                <div>
                                    Total Price: &#8377;{cartDetails.totalPrice.toFixed(2)}
                                </div>
                                <Button variant="contained" onClick={() => checkOutOrder()} color="primary" style={{ marginTop: 16 }}>
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <Typography variant="body1">Your cart is empty.</Typography>
                )}
                {/* </Paper> */}
            </Container>

        </div>
    );
}