import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart ,clearCart } from "../features/cart/cartSlice";
import "./CartView.css"; 

const CartView =()=>{
  const cartItems = useSelector((state)=>state.cart.items);
  const totalAmount = useSelector((state)=>state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  return(
    <div className="cart-view">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} (x{item.quantity}) - ${item.totalPrice.toFixed(2)}
                <button onClick={() => dispatch(removeItemFromCart(item.id))}>Remove One</button>
              </li>
            ))}
          </ul>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Amount: ${totalAmount.toFixed(2)}</p>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
  
};

export default CartView;
