import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const filteredProducts = products.filter(product => product.category === categoryName);

    return (
        <div>
            <h1>Productos en la categoría: {categoryName}</h1>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
