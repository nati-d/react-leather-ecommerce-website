import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import saveSlice from "./features/saveSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    saveProduct: saveSlice,
  },
});

export default store;
