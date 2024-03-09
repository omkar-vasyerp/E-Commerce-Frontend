import React, { useEffect, useState } from "react";
import './MyOrder.css';
import { useAppContext } from "../../context/Appcontext";
import { getOrders } from "../../service/OrderApi";
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { SyncLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";


export default function MyOrder() {
    const [orderDetails, setOrderDetails] = useState();
    const {loading,setLoading} = useAppContext();
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const orders = await getOrders();
                setOrderDetails(orders);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching orders', error);
                setLoading(false);
            }
        };
        fetchOrders();
    }, [setOrderDetails]);

    const getOrderDetail=()=>{
        
    }

    return (
        console.log(orderDetails),
        <div className="order-container">
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: 16, marginTop: 64 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        My Orders
                    </Typography>
                    {loading ? (
                        <div style={{ textAlign: 'center', marginTop: '150px' }}>
                            <SyncLoader color="#36D7B7" size={15} margin={5} loading={loading} />
                        </div>
                    ) : orderDetails  ? (
                        <>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            {/* <TableCell>OrderId</TableCell> */}
                                            {/* <TableCell></TableCell> */}
                                            {/* <TableCell>Products</TableCell> */}
                                            <TableCell>Order Date</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orderDetails.map((order) => (
                                           
                                                <TableRow key={order.orderId}>
                                                    {/* <TableCell>{order.orderId}</TableCell> */}
                                                    {/* <TableCell>{item.productImage}</TableCell> */}
                                                    {/* <TableCell>{order}</TableCell> */}
                                                    <TableCell>{order.orderDate}</TableCell>
                                                    <TableCell>${order.orderTotal}</TableCell>
                                                    <TableCell className="hj">{order.status}</TableCell>
                                                    <TableCell onClick={() => getOrderDetail()}> <Button variant="outlined" color="secondary">
                                                    View  
                                                </Button></TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    ) : (
                        <Typography variant="body1">You have No Orders.</Typography>
                    )}
                </Paper>
            </Container>


        </div>
    );
};