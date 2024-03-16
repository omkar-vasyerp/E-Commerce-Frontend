
export const register= async(formData,navigate)=>{
    try {
        const response = await fetch('http://localhost:8080/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          console.log('Server response:', responseData);
         navigate("/")
        } else {
          console.error('Server error:', response.status);
         
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } 
}

export const login =async(formData, setFormData, navigate)=>{
try {
    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    
    if (response.ok) {
        const responseData = await response.json();
        console.log('Server response:', responseData);
        navigate("/")
    } else {
        console.error('Server error:', response.status);
        window.alert("Please Enter Valid Details")
        setFormData({
            email: '',
            password: '',
          });
       
    }
} catch (error) {
    console.error('Error submitting form:', error);
}
}