import React from 'react';
import { categories } from '../data/products';
import { Link } from 'react-router-dom';

const Productos = () => {
    return (
        <div>
            <h1>Productos</h1>
            <h2>Categorías</h2>
            <ul>
                {categories.map(category => (
                    <li key={category}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;
