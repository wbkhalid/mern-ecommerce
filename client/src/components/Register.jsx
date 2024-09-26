import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography, Container, Box, FormControlLabel, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            isAdmin: false,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        }),
        onSubmit: (values) => {
            // Handle registration logic here
            console.log('Register:', values);
        },
    });

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5 }} minHeight='95vh'>
            <Typography variant="h4" textAlign='center' fontWeight='bold' gutterBottom>
                    Register
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        {...formik.getFieldProps('name')}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formik.values.isAdmin}
                                onChange={formik.handleChange}
                                name="isAdmin"
                            />
                        }
                        label="Register as Admin"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Register
                    </Button>
                </form>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Register;
