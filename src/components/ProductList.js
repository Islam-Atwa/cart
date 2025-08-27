import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import './ProductList.css'; // Optional: for basic styling

const products = [
  { id: 'p1', name: 'Laptop', price: 1200 },
  { id: 'p2', name: 'Keyboard', price: 75 },
  { id: 'p3', name: 'Mouse', price: 25 },
  { id: 'p4', name: 'Monitor', price: 300 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-list">
      <h2>Available Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;