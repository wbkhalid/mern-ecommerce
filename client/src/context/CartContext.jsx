import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (product) => {
        setCart((prevCart) => ({
            ...prevCart,
            [product._id]: prevCart[product._id] ? prevCart[product._id] + 1 : 1,
        }));
    };

    const decrementFromCart = (product) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[product._id] > 1) {
                updatedCart[product._id] -= 1;
            } else {
                delete updatedCart[product._id];
            }
            return updatedCart;
        });
    };


    const getQuantity = (productId) => {
        return cart[productId] || 0;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, decrementFromCart, getQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
