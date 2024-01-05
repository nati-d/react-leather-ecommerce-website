// src/features/saveSlice.js

import { createSlice } from '@reduxjs/toolkit';

const saveSlice = createSlice({
  name: 'saveProduct',
  initialState: {
    savedItems: [],
  },
  reducers: {
    addToSavedItems: (state, action) => {
      state.savedItems.push(action.payload);
    },
    removeFromSavedItems: (state, action) => {
      state.savedItems = state.savedItems.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToSavedItems, removeFromSavedItems } = saveSlice.actions;
export const selectSavedItems = state => state.saveProduct.savedItems;
export default saveSlice.reducer;
