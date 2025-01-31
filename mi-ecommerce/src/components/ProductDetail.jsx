import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = products.find(prod => prod.id === parseInt(productId));
    const { addToCart } = useContext(CartContext);

    if (!product) return <h2>Producto no encontrado</h2>;

    const handleAddToCart = (quantity) => {
        addToCart(product, quantity);
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <ItemCount stock={5} onAdd={handleAddToCart} />
        </div>
    );
};

export default ProductDetail;
