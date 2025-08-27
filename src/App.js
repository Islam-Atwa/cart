import React from 'react';
import ProductList from './components/ProductList';
import CartView from './components/CartView';
import './App.css'; // Optional: for basic layout

function App() {
  return (
    <div className="App">
      <h1>My Online Store</h1>
      <div className="store-layout">
        <ProductList />
        <CartView />
      </div>
    </div>
  );
}

export default App;