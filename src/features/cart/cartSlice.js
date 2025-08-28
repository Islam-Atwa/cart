
import { createSlice } from '@reduxjs/toolkit'

// Initial state of cart 

const initialState={
  items:[],   // array of cart [id, name, price, quntity]
  totalQuantity:0,
  totalAmount:0
}

// create cart slice 
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  
  reducers:{
    // action to add item to cart
    addItemToCart(state, action) {
      const newItem = action.payload;
      // هل المنتج اللي المستخدم ضافه موجود في السله ام لأ
      const existingItem = state.items.find(item => item.id === newItem.id); // check if item added using by user already exists in cart
      state.totalQuantity++;

      // لو المنتج  موجود في السله
      if (existingItem){ // if item  exists in cart 
        existingItem.quantity++;
        existingItem.totalPrice =existingItem.totalPrice + newItem.price; 
      }
      else{ // if item  not exists in cart  لو المنتج غير موجود في السله
          // add new item to cart
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1
        });
      }
    // total amount of cart حساب إجمالي قيمة الكارت عن طريق جمع كل الأسعار  الكليه لكل المنتجات الموجودة في الكارت
    state.totalAmount = state.items.reduce((acc, item)=> acc + item.totalPrice, 0);
    },
  }
})