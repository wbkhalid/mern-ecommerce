import React, { useState } from 'react';
import { Typography, Button, Grid, Container, Card, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ProductCard from '../components/ProductCard';
import HomeHero from '../components/HomeHero';

const Home = ({ allProducts }) => {
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [cart, setCart] = useState({});


    const filteredProducts = allProducts.filter(product => {
        const [minPrice, maxPrice] = priceRange ? priceRange.split('-').map(Number) : [0, 200];
        return (
            (categoryFilter === '' || product.category === categoryFilter) &&
            (product.price >= minPrice && product.price <= maxPrice) &&
            (ratingFilter === '' || product.rating >= ratingFilter)
        );
    });

    const handleAddToCart = (product, quantity) => {
        setCart(prevCart => ({
            ...prevCart,
            [product._id]: quantity
        }));
    };

    // Clear filters
    const handleClearFilters = () => {
        setCategoryFilter('');
        setPriceRange('');
        setRatingFilter('');
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <HomeHero />

            {/* Filter Section */}
            <Card sx={{ borderRadius: '1rem', boxShadow: 'none', p: 2 }}>
                <Typography variant='h5' fontWeight='bold' textAlign='center' gutterBottom>Filter Products</Typography>
                <Grid container gap={2} justifyContent="center">
                    {/* Category Filter */}
                    <Grid item xs={12} sm={3.8}>
                        <FormControl fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                label="Category"
                            >
                                <MenuItem value=''>All</MenuItem>
                                <MenuItem value='Electronics'>Electronics</MenuItem>
                                <MenuItem value='Clothing'>Clothing</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Price Range Filter (Dropdown) */}
                    <Grid item xs={12} sm={3.8}>
                        <FormControl fullWidth>
                            <InputLabel>Price Range</InputLabel>
                            <Select
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                label="Price Range"
                            >
                                <MenuItem value=''>All</MenuItem>
                                <MenuItem value='0-50'>$0 - $50</MenuItem>
                                <MenuItem value='50-100'>$50 - $100</MenuItem>
                                <MenuItem value='100-150'>$100 - $150</MenuItem>
                                <MenuItem value='150-200'>$150 - $200</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Rating Filter (Dropdown) */}
                    <Grid item xs={12} sm={3.8}>
                        <FormControl fullWidth>
                            <InputLabel>Minimum Rating</InputLabel>
                            <Select
                                value={ratingFilter}
                                onChange={(e) => setRatingFilter(e.target.value)}
                                label="Minimum Rating"
                            >
                                <MenuItem value=''>All</MenuItem>
                                <MenuItem value={1}>1 and above</MenuItem>
                                <MenuItem value={2}>2 and above</MenuItem>
                                <MenuItem value={3}>3 and above</MenuItem>
                                <MenuItem value={4}>4 and above</MenuItem>
                                <MenuItem value={5}>5 only</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Clear Filters Button */}
                    <Grid item xs={12} sm={4} display='flex' justifyContent='center'>
                        <Button variant="outlined" onClick={handleClearFilters}>
                            Clear Filters
                        </Button>
                    </Grid>
                </Grid>
            </Card>

            {/* Filtered Product Display */}
            <Typography variant="h4" textAlign='center' fontWeight='bold' gutterBottom>
                All Products
            </Typography>
            <Grid container gap={1.5}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Grid item key={product._id} xs={12} sm={6} md={3.9}>
                            <ProductCard
                                product={product}
                                onAddToCart={handleAddToCart}
                                cartQuantity={cart[product._id] || 0} // Set default quantity to 0
                            />
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" align="center" sx={{ width: '100%', mt: 2 }}>
                        No products found.
                    </Typography>
                )}
            </Grid>
        </Container>
    );
};



export default Home;
