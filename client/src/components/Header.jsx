import React, { useContext } from 'react';
import { AppBar, Button, Container, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the CartContext

const Header = () => {
    const { cart } = useCart(); // Access cart from the context

    // Calculate total items in the cart
    const totalItems = Object.keys(cart).length

    return (
        <AppBar position="sticky" color="primary">
            <Container>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        E-Commerce
                    </Typography>
                    <Button color="inherit" component={Link} to="/" disableRipple>Home</Button>
                    <Button color="inherit" component={Link} to="/add" disableRipple>New Product</Button>
                    <Button color="inherit" component={Link} to="/login" disableRipple>Login</Button>
                    <Button color="inherit" component={Link} to="/register" disableRipple>Register</Button>

                    <IconButton color="inherit" component={Link} to="/cart" disableRipple>
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
