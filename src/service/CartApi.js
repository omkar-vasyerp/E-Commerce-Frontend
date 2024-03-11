import { useAuthContext } from "../context/AuthContext";

 export default function CartApi() {
    const { token, userId } = useAuthContext();

    const AddToCart = async (updatedProduct) => {
        if (!userId) {
            console.error('User ID is undefined');
            return;
        }
        const cartUrl = `http://localhost:8080/cart?userId=${userId}`;

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
        if (!userId) {
            console.error('User ID is undefined');
            return;
        }
        const cartUrl = `http://localhost:8080/cart?userId=${userId}&productId=${productId}`;
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
        if (!userId) {
            console.error('User ID is undefined');
            return;
        }
        try {
            const response = await fetch(`http://localhost:8080/cart?userId=${userId}`, {
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