import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    replaceCart: (state, action) => {
      const { items, totalQuantity } = action.payload;
      state.items = items;
      state.totalQuantity = totalQuantity;
    },
    addItem: (state, action) => {
      const addedItem = action.payload;
      const existingItem = state.items.find((item) => item.id === addedItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: addedItem.id,
          price: addedItem.price,
          quantity: 1,
          totalPrice: addedItem.price,
          name: addedItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + addedItem.price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
