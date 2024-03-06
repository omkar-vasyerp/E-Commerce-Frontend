export const addToCart = async (updatedProduct) => {
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

export const removeFromCart = async (productId) => {
   
    const cartUrl = `http://localhost:8080/cart/${productId}?userId=1`;
    try {
        const response = await fetch(cartUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }); 

        if (!response.ok) {
            console.error('Server error:', response.status);
       
        }
    } catch (error) {
        console.error('Error updating cart on server:', error);
      
    }
};

export const getCartDetails = async (userId) => {
    try {
        const response = await fetch(`http://localhost:8080/cart?userId=1`);
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