import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Paper, Typography } from '@mui/material';
import './SignUp.css'
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    password: ''

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='signup-container'>

      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 16, marginTop: 64 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstname"
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.username}
                  required
                />

                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastname"
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.username}
                  required
                  style={{ marginTop: 12 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.username}
                  required
                  style={{ marginTop: 12 }}
                />
                <TextField
                  fullWidth
                  label="Contact"
                  name="contact"
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.username}
                  required
                  style={{ marginTop: 12 }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.username}
                  required
                  style={{ marginTop: 12 }}
                />
              </Grid>
              {/* ... (other fields) */}
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
              Register
            </Button>
          </form>
        </Paper>
      </Container>

    </div>
  );
};
export default SignUp;