import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Container, Typography, Divider, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';

const UserProfile = () => {
    // Sample user data
    const initialUserData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: '',
    };

    // Sample order history data
    const orderHistory = [
        { id: 1, productName: 'Product 1', orderDate: '2024-09-15', status: 'Delivered' },
        { id: 2, productName: 'Product 2', orderDate: '2024-09-10', status: 'In Progress' },
        { id: 3, productName: 'Product 3', orderDate: '2024-08-20', status: 'Canceled' },
    ];

    const [userData, setUserData] = useState(initialUserData);

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters'),
    });

    const handleUpdateProfile = (values) => {
        // Update user information logic (e.g., API call)
        console.log('Updated Profile:', values);
        setUserData(values);
    };

    return (
        <Container sx={{ minHeight: '90vh', my: 4 }}>
            {/* User Account Section */}
            <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
                <Typography variant="h4" textAlign='center' fontWeight='bold' gutterBottom>
                    Account Information
                </Typography>

                <Formik
                    initialValues={userData}
                    validationSchema={validationSchema}
                    onSubmit={handleUpdateProfile}
                >
                    {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
                        <Form>
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                            </Box>

                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            </Box>

                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                            </Box>

                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Update Profile
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box>
                <Typography variant="h4" textAlign='center' fontWeight='bold' gutterBottom>
                    Order History
                </Typography>

                <Box display='flex' flexDirection='column' gap={1}>
                    {orderHistory.map((order) => {
                        let statusColor = order.status == 'In Progress' ? 'black' : order.status == 'Canceled' ? 'red' : 'green'
                        return (
                            <Card key={order.id} sx={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', borderRadius: '.5rem', display: 'flex', justifyContent: 'space-between', p: 2 }}>
                                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{order.productName} </Typography>
                                <Typography>{order.orderDate} </Typography>
                                <Typography color={statusColor}>{order.status} </Typography>
                            </Card>
                        )
                    })}
                </Box>
            </Box>
        </Container>
    );
};

export default UserProfile;
