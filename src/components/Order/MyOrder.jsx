import React, { useEffect, useState } from "react";
import './MyOrder.css';
import { useAppContext } from "../../context/Appcontext";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { SyncLoader } from "react-spinners";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderApi from "../../service/OrderApi";

export default function MyOrder() {
    const [orderDetails, setOrderDetails] = useState();
    const { loading, setLoading } = useAppContext();
    const [expanded, setExpanded] = useState(null);
    const {GetOrders} = OrderApi();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const orders = await GetOrders();
                setOrderDetails(orders);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching orders', error);
                setLoading(false);
            }
        };
        fetchOrders();
    }, [setOrderDetails,setLoading]);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="order-container">
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: 16, marginTop: 64 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        My Orders
                    </Typography>
                    <hr></hr>
                    <div style={{ display: 'flex',paddingLeft:'inherit', justifyContent: 'space-around' }}>
                                <h5> Date</h5>
                                <h5> Price</h5>
                                <h5> Status</h5>
                                <h5> </h5>   
                    </div>
                    {loading ? (
                        <div style={{ textAlign: 'center', marginTop: '150px' }}>
                            <SyncLoader color="#36D7B7" size={15} margin={5} loading={loading} />
                        </div>
                    ) : orderDetails ? (
                        <>
                            {orderDetails.map((order) => (

                                <Accordion key={order.orderId} expanded={expanded === order.orderId} onChange={handleChange(order.orderId)}>
                                    <AccordionSummary>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                                           <p> {order.orderDate}</p>
                                           <p>  &#8377;{order.orderTotal}</p>
                                           <p>  {order.status}</p>
                                           <ExpandMoreIcon />
                                        </div>

                                    </AccordionSummary>
                                    <AccordionDetails>
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
                                                {order.orderLine.map((item) => (
                                                    <TableRow key={item.productId}>
                                                        <TableCell>
                                                            <img src={item.productImage} alt={item.productName} style={{ width: '50px', borderRadius: 8 }} />
                                                        </TableCell>
                                                        <TableCell>{item.productName}</TableCell>
                                                        <TableCell>{item.quantity}</TableCell>
                                                        <TableCell>&#8377;{item.unitPrice.toFixed(2)}</TableCell>
                                                        <TableCell>&#8377;{item.price.toFixed(2)}</TableCell>
                                                    </TableRow>
                                                ))}
                                                <TableRow>
                                                    <TableCell></TableCell>
                                                    <TableCell>Total:</TableCell>
                                                    <TableCell>{order.orderQuantity}</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell>&#8377;{order.orderTotal.toFixed(2)}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </AccordionDetails>
                                    <AccordionActions>
                                        <Button>View Order Details</Button>
                                    </AccordionActions>
                                </Accordion>

                            ))}
                        </>
                    ) : (
                        <Typography variant="body1">You have No Orders.</Typography>
                    )}
                </Paper>
            </Container>


        </div >
    );
};