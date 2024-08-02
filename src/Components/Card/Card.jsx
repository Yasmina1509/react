import React from 'react';
import './Card.css';

function Card({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} {product.coins}</p>
      <p>{product.available} dona mavjud</p>
    </div>
  );
}

export default Card;