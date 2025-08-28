
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
    // Action to add item to cart
    addItemToCart:(state, action)=>{
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

    // Action to remove item from cart or decrease item quantity
    removeItemFromCart:(state, action)=>{
      const id= action.payload;
      const existingItem = state.items.find(item => item.id === id);

      // لو المنتج  موجود في السله
      if(existingItem){
        state.totalQuantity--; //  قلل العدد الكلي للمنتجات 

        // لو الكميه للمنتج 1 يبقي احذفه من السله 
        if(existingItem.quantity ===1){
          state.items = state.items.filter(item=> item.id === id);
        }
        // لو الكميه للمنتج اكبر من 1 يبقي قلل الكميه بواحد
        else{
          existingItem.quantity--;
          // قلل السعر الكلي للمنتج بطرح سعر المنتج
          existingItem.totalPrice= existingItem.totalPrice - existingItem.price;
        }
        // total amount of cart حساب إجمالي قيمة الكارت عن طريق جمع كل الأسعار  الكليه لكل المنتجات الموجودة في الكارت
        state.totalAmount = state.items.reduce((acc, item)=> acc + item.totalPrice, 0);
      }
    },

    // Action te clear all cart
    clearState:(state)=>{
      state.items =[];
      state.totalQuantity=0;
      state.totalAmount=0;
    },
  },
});

  export const { addItemToCart, removeItemFromCart, clearState }= cartSlice.actions;
  export default cartSlice.reducer;