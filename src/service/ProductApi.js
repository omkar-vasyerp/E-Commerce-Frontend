
export const getProduct=async(categoryId,searchProduct)=>{
    try {
        const response = await fetch('http://localhost:8080/product?categoryId=' + categoryId + '&searchKey=' + searchProduct);
        if (response.ok) {
            return await response.json();
        } else {
            console.error('Error fetching Product details:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error fetching cart details:', error);
        return null;
    }
}
