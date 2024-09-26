import React, { useState } from 'react';
import { AppBar, Button, Container, Toolbar, Typography, IconButton, Badge, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
    const { cart } = useCart();
    const { token, logout } = useAuth();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const totalItems = Object.keys(cart).length;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
        <AppBar position="sticky" color="primary">
            <Container>
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
                        component={Link}
                        to="/"
                    >
                        E-Commerce
                    </Typography>

                    {isMobile ? (
                        <>
                            <IconButton
                                color="inherit"
                                onClick={handleDrawerToggle} r
                            >
                                <MenuIcon />
                            </IconButton>

                            <Drawer
                                anchor="left"
                                open={drawerOpen}
                                onClose={handleDrawerToggle} 
                            >
                                <List sx={{ width: 250 }} onClick={handleDrawerToggle}>
                                    <ListItem button component={Link} to="/">
                                        <ListItemText primary="Home" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/add">
                                        <ListItemText primary="New Product" />
                                    </ListItem>
                                    <Divider />
                                    {token ? (
                                        <>
                                            <ListItem button component={Link} to="/profile">
                                                <ListItemText primary="Profile" />
                                            </ListItem>
                                            <ListItem button onClick={logout}>
                                                <ListItemText primary="Logout" />
                                            </ListItem>
                                        </>
                                    ) : (
                                        <ListItem button component={Link} to="/login">
                                            <ListItemText primary="Login" />
                                        </ListItem>
                                    )}
                                    <Divider />
                                    <ListItem button component={Link} to="/cart">
                                        <Badge badgeContent={totalItems} color="secondary">
                                            <ShoppingCartIcon />
                                        </Badge>
                                        <ListItemText primary="Cart" sx={{ marginLeft: 2 }} />
                                    </ListItem>
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" component={Link} to="/" disableRipple>Home</Button>
                            <Button color="inherit" component={Link} to="/add" disableRipple>New Product</Button>
                            {token ? (
                                <>
                                    <Button color="inherit" component={Link} to="/profile" disableRipple>Profile</Button>
                                    <Button color="inherit" onClick={logout} disableRipple>Logout</Button>
                                </>
                            ) : (
                                <Button color="inherit" component={Link} to="/login" disableRipple>Login</Button>
                            )}
                            <IconButton color="inherit" component={Link} to="/cart" disableRipple>
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
