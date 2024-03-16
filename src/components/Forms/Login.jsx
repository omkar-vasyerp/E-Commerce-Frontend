import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Paper, Typography } from '@mui/material';
// Replace with the actual path
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/Appcontext';
import AccountApi from '../../service/AccountApi';

const Login = () => {
    const { setLoading } = useAppContext();

    const navigate = useNavigate();
    const {Login1} = AccountApi();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        Login1(formData,setFormData,navigate)
        setLoading(false);

    };

    return (
        <div className='login-container'>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={{ padding: 16, marginTop: 64 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
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
                            Login
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};
export default Login;