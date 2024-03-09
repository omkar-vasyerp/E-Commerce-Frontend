import { useAuthContext } from "../context/AuthContext";

export default function CartApi() {
    const { token } = useAuthContext();

    const AddToCart = async (updatedProduct) => {
        const cartUrl = `http://localhost:8080/cart?userId=1`;

        const addToCartDto = {
            'productId': updatedProduct.productId,
            'quantity': 1,
        };
        try {
            const response = await fetch(cartUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(addToCartDto),
            });
            if (response.ok) {

                console.log('Cart updated on server:', response);
            } else {
                console.error('Server error:', response.status);
            }
        } catch (error) {
            console.error('Error updating cart on server:', error);
        }
    };

    const RemoveFromCart = async (productId) => {
        const cartUrl = `http://localhost:8080/cart?userId=1&productId=${productId}`;
        try {
            const response = await fetch(cartUrl, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            if (response.ok) {

                console.log('Cart updated on server:', response);
            } else {
                console.error('Server error:', response.status);
            }
        } catch (error) {
            console.error('Error updating cart on server:', error);

        }
    };

    const GetCartDetails = async () => {
        try {
            const response = await fetch(`http://localhost:8080/cart?userId=1`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                return await response.json();
            } else {
                console.error('Error fetching cart details:', response.status);
                return null;
            }
        } catch (error) {
            console.error('Error fetching cart details:', error);
            return null;
        }
    };
    return {
        AddToCart,
        GetCartDetails,
        RemoveFromCart
    };
}