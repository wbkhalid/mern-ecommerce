import { Card, CardMedia, CardContent, CardActions, Button, Typography, Box, Rating } from '@mui/material';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { addToCart, decrementFromCart, getQuantity } = useCart();
    const quantity = getQuantity(product._id);

    return (
        <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: '1rem', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <CardMedia
                component="img"
                height="200"
                image={product?.imageUrl}
                alt={product?.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" fontWeight='bold'>
                    {product?.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <b>Price:</b> ${product?.price}
                </Typography>
                <Box display='flex' alignItems='center' gap={.2}>
                    <Typography variant="body2" color="textSecondary" fontWeight='bold'>
                        Rating:
                    </Typography>
                    <Rating name="read-only" value={product?.rating} readOnly precision={0.1} />
                </Box>

                <Box display='flex' gap={1} alignItems='center' mt='1rem'>
                    <Box onClick={() => decrementFromCart(product)} sx={{ ...buttonStyle }}>−</Box>
                    <Box sx={{ textAlign: 'center', width: '10%' }}>
                        <Typography ><b>{quantity}</b></Typography>
                    </Box>
                    <Box onClick={() => addToCart(product)} sx={{ ...buttonStyle }}>+</Box>
                </Box>

                <Button component={Link} to={`/product/${product?._id}`} variant='contained' fullWidth sx={{ mt: '1rem' }}>
                    View Details
                </Button>
            </CardContent>





        </Card>
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

export default ProductCard;
