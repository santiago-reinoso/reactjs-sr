import React, { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
