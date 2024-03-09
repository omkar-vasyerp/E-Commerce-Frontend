export const PlaceOrder = async (cartDetails, navigate) => {
    const orderUrl = `http://localhost:8080/order?userId=1`;
    try {
        const response = await fetch(orderUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYXlAZ21haWwuY29tIiwiZXhwIjoxNzEwMDA1MTIyLCJpYXQiOjE3MTAwMDE1MjJ9.75aufH70iVL6FIT9UIHaByg9HdxO8dbJUL0fxCWnYyY`
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

export const GetOrders = async () => {
    const orderUrl = `http://localhost:8080/order/1`;

    try {
        const response = await fetch(orderUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYXlAZ21haWwuY29tIiwiZXhwIjoxNzEwMDA1MTIyLCJpYXQiOjE3MTAwMDE1MjJ9.75aufH70iVL6FIT9UIHaByg9HdxO8dbJUL0fxCWnYyY`,
            },
        });

        // console.log('Response status:', response.status);

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
