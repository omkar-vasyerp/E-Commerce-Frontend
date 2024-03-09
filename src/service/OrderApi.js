import { useAuthContext } from "../context/AuthContext";

export default function OrderApi(){
const {token } = useAuthContext();

const PlaceOrder = async (cartDetails, navigate) => {
    const orderUrl = `http://localhost:8080/order?userId=1`;
    try {
        const response = await fetch(orderUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            },
            body: JSON.stringify(cartDetails)
        });

        if (response.ok) {
            navigate("/my-orders");
        } else {
            console.error('Server error:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error, Order Not Placed:', error);
        return null;
    }
};

 const GetOrders = async () => {
    const orderUrl = `http://localhost:8080/order/1`;

    try {
        const response = await fetch(orderUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`,
            },
        });

        

        if (response.ok) {
            const data = await response.json();
            // console.log('Response data:', data);
            return data;
        } else {
            console.error('Server error:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error fetching orders:', error);
        return null;
    }
};
return{
    GetOrders,
    PlaceOrder
}
}
