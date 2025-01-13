import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = products.find(prod => prod.id === parseInt(productId));

    if (!product) return <h2>Producto no encontrado</h2>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button>Agregar al carrito</button>
        </div>
    );
};

export default ProductDetail;
