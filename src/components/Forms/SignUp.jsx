import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Paper, Typography } from '@mui/material';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/Appcontext';
import { Register } from '../../service/AccountApi';

const SignUp = () => {
  const { setLoading } = useAppContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    Register(formData,navigate)
    setLoading(false);

  };

  return (
    <div className='main-container'>
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
                  name="firstName"
                  type='text'
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />

                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  type='text'
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                  style={{ marginTop: 12 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type='email'
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  style={{ marginTop: 12 }}
                />
                
                <TextField
                  fullWidth
                  label="Contact"
                  name="contact"
                  type='number'
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.contact}
                  required
                  style={{ marginTop: 12 }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                  style={{ marginTop: 12 }}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
              Register
            </Button>
          </form>
        </Paper>
      </Container>
      </div>
    </div>
  );
};
export default SignUp;