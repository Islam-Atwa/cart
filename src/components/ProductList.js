import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import './ProductList.css';

// Initial Array of Products
const products = [
  { id: 1, name: 'Laptop', price: 100},
  { id: 2, name: 'Monitor', price: 49.99 },
  { id: 3, name: 'Keyboard', price: 19.99 },
  { id: 4, name: 'Mouse', price: 9.99 },
  { id: 5, name: 'UTMANING ', price: 150},
  { id: 6, name: 'JÄRVFJÄLLET', price: 29.99 }
]

const ProductList =()=>{
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

  // handler to add a product to the cart
  const handleAddToCart =(product)=>{
    dispatch(addItemToCart(product));
  };

  return(
    <div className='product-list'>
      <h2>Available Products</h2>
      <ul>
        {products.map((product)=>(
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={()=>handleAddToCart(product)}> Add to </button>
          </li>
        ))};
      </ul>
    </div>
  );
}

export default ProductList;