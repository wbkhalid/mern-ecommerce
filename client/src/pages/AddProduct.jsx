import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem, Box, Container, Typography } from '@mui/material';

const AddProduct = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const initialValues = {
        name: '',
        price: '',
        image: null,
        category: '',
        rating: '',
        description: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Product name is required'),
        price: Yup.number()
            .required('Price is required')
            .positive('Price must be a positive number'),
        image: Yup.mixed().required('Image is required'), // Validate file input
        category: Yup.string().required('Category is required'),
        rating: Yup.number()
            .required('Rating is required')
            .min(0, 'Rating cannot be less than 0')
            .max(5, 'Rating cannot exceed 5'),
        description: Yup.string()
            .required('Description is required')
            .min(10, 'Description should be at least 10 characters long'), // New validation
    });

    const handleImageChange = (event, setFieldValue) => {
        const file = event.target.files[0];
        if (file) {
            setFieldValue('image', file);

            // Create an image preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = (values, { resetForm }) => {
        console.log('Form Data', values);
        resetForm();
        setImagePreview(null);
    };

    return (
        <Container sx={{ minHeight: '90vh' }}>
            <Box sx={{ maxWidth: 400, margin: '1rem auto' }}>
                <Typography variant="h4" textAlign='center' fontWeight='bold' gutterBottom>Add Product</Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, handleChange, handleBlur, setFieldValue, errors, touched, isSubmitting }) => (
                        <Form>

                            {/* Product Name */}
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Product Name"
                                    variant="outlined"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                            </Box>

                            {/* Price */}
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    id="price"
                                    name="price"
                                    label="Price"
                                    variant="outlined"
                                    type="number"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.price && Boolean(errors.price)}
                                    helperText={touched.price && errors.price}
                                />
                            </Box>

                            {/* Category */}
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    id="category"
                                    name="category"
                                    label="Category"
                                    variant="outlined"
                                    select
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.category && Boolean(errors.category)}
                                    helperText={touched.category && errors.category}
                                >
                                    <MenuItem value="">Select category</MenuItem>
                                    <MenuItem value="Electronics">Electronics</MenuItem>
                                    <MenuItem value="Clothing">Clothing</MenuItem>
                                </TextField>
                            </Box>

                            {/* Rating */}
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    id="rating"
                                    name="rating"
                                    label="Rating"
                                    variant="outlined"
                                    type="number"
                                    value={values.rating}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.rating && Boolean(errors.rating)}
                                    helperText={touched.rating && errors.rating}
                                />
                            </Box>

                            {/* Description */}
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    id="description"
                                    name="description"
                                    label="Description"
                                    variant="outlined"
                                    multiline
                                    minRows={4}
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.description && Boolean(errors.description)}
                                    helperText={touched.description && errors.description}
                                />
                            </Box>

                            {/* Image Upload */}
                            <Box mb={2}>
                                <Button
                                    variant="text"
                                    component="label"
                                    fullWidth
                                    color="secondary"
                                >
                                    Upload Image
                                    <input
                                        type="file"
                                        hidden
                                        onChange={(event) => handleImageChange(event, setFieldValue)}
                                    />
                                </Button>
                                {touched.image && errors.image && (
                                    <div style={{ color: 'red' }}>{errors.image}</div>
                                )}
                                {imagePreview && (
                                    <Box mt={2}>
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </Box>
                                )}
                            </Box>

                            {/* Submit Button */}
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};

export default AddProduct;
