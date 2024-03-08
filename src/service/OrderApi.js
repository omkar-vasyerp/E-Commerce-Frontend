export const placeOrder = async (cartDetails, navigate) => {
    const orderUrl = `http://localhost:8080/order?userId=1`;
    try {
        const response = await fetch(orderUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartDetails)
        });

        if (response.ok) {
            console.log(response);
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

export const getOrders = async () => {
    const orderUrl = `http://localhost:8080/order/1`;

    try {
        const response = await fetch(orderUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Response status:', response.status);

        if (response.ok) {
            const data = await response.json();
            console.log('Response data:', data);
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
