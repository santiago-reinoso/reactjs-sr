import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={`/img/${product.name.toLowerCase().replace(/ /g, '-')}.jpg`} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}<br />${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">Ver detalles</Link>
            </div>
        </div>
    );
};

export default ProductCard;
