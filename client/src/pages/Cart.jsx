import React from 'react';
import { useCart } from '../context/CartContext'; // Import the CartContext
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
} from '@mui/material';

const Cart = ({ allProducts }) => {
  const { cart, decrementFromCart, addToCart } = useCart();

  const calculateTotal = () => {
    return Object.keys(cart).reduce((total, productId) => {
      const quantity = cart[productId];
      const product = allProducts.find(product => product._id === Number(productId));
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };

  return (
    <Container sx={{ minHeight: '90vh', mt: "2rem" }}>
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Your Cart
      </Typography>
      <Grid container spacing={2}>
        {Object.keys(cart).length === 0 ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '50vh' }}>
            <Typography variant="h6" fontWeight='bold'>Your cart is empty</Typography>
          </Box>
        ) : (
          Object.keys(cart).map((productId) => {
            const quantity = cart[productId];
            const product = allProducts.find(product => product._id === Number(productId));

            return product ? (
              <Grid item xs={12} sm={6} md={4} key={productId}>
                <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', borderRadius: '1rem' }}>
                  <CardContent sx={{ p: 0 }}>
                    <img src={product.imageUrl} alt={product.name} style={{ width: "100%", height: '10rem' }} />
                    <Box sx={{ p: 1 }}>
                      <Typography variant="h6" fontWeight='bold'>{product.name}</Typography>
                      <Typography variant="body1"><b>Price: $</b>{product.price}</Typography>
                      <Box display='flex' gap={1} alignItems='center' mt='1rem'>
                        <Box onClick={() => decrementFromCart(product)} sx={{ ...buttonStyle }}>−</Box>
                        <Box sx={{ textAlign: 'center', width: '10%' }}>
                          <Typography ><b>{quantity}</b></Typography>
                        </Box>
                        <Box onClick={() => addToCart(product)} sx={{ ...buttonStyle }}>+</Box>
                      </Box>
                    </Box>

                  </CardContent>
                </Card>

              </Grid>
            ) : null;
          })
        )}
      </Grid>
      {Object.keys(cart).length !== 0 && <Typography variant="h5" style={{ marginTop: '20px' }}>
        Total: ${calculateTotal()}
      </Typography>}

    </Container>
  );
};

const buttonStyle = {
  width: '2rem',
  height: '2rem',
  bgcolor: 'rgba(0,0,0,.3)',
  color: '#fff',
  borderRadius: '.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
}

export default Cart;
