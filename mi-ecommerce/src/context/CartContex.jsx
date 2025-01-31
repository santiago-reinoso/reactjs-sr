import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const newCart = [...cart];
        const existingProduct = newCart.find(item => item.id === product.id);
        
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            newCart.push({ ...product, quantity });
        }

        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
