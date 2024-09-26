import { useParams } from 'react-router-dom';
import { Grid, Typography, CardMedia, Box, Rating, Container } from '@mui/material';

const ProductDetails = ({ allProducts }) => {
    const { productId } = useParams();

    const product = allProducts?.find(p => String(p?._id) === String(productId));

    if (!product) return <Typography>Product not found</Typography>;

    return (
        <Container sx={{ p: 4, minHeight: '95vh' }}>
            <Typography variant="h4" fontWeight="bold" textAlign='center' gutterBottom>
                {product?.name}
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={5}>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <img src={product?.imageUrl} alt={product?.name} style={{ height: 'auto', width: '80%', borderRadius: '.5rem' }} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={7}>

                    <Typography variant="body1" mt={2}>
                        <b>Price:</b> ${product?.price}
                    </Typography>

                    <Box display='flex' alignItems='center' gap={.2}>
                        <Typography variant="body2" color="textSecondary" fontWeight='bold'>
                            Rating:
                        </Typography>
                        <Rating name="read-only" value={product?.rating} readOnly precision={0.1} />
                    </Box>
                    <Typography variant="body1" mt={2}>
                        {product?.description}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetails;
