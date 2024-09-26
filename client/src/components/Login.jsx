import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../_api/user';

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                const data = await loginUser(values);
                localStorage.setItem('token', data.token); 
                navigate('/');
            } catch (error) {
                console.error('Login failed:', error);
            }
        },
    });

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5 }} minHeight='95vh'>
                <Typography variant="h4" textAlign='center' fontWeight='bold' gutterBottom>
                    Login
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        {...formik.getFieldProps('email')}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        {...formik.getFieldProps('password')}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </form>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    Don't have an account? <Link to="/register">Register</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Login;
