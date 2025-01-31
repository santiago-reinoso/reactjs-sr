import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="cart-widget">
            <img src="/img/cart-icon.png" alt="Cart" />
            {totalItems > 0 && <span>{totalItems}</span>}
        </div>
    );
};

export default CartWidget;
