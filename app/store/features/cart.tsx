"use client";

import { Cart } from "@/app/utils/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        const uuid = Math.floor(1000 + Math.random() * 9000);
        const newObj = { ...action.payload, uuid, qty: 1 };
        state.push(newObj);
      }
    },

    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },
    incrementQty(state, action) {
      const item = state.find((i) => i.uuid === action.payload.uuid);
      if (item) {
        item.qty += 1;
      }
    },
    decrementQty(state, action) {
      const item = state.find((i) => i.uuid === action.payload.uuid);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        return state.filter((val) => val.uuid !== action.payload.uuid);
      }
    },
  },
});

export const { addToCart, delItem, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
