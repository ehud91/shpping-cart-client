import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from '../features/ProductsSlice';

// Configure the store with the products reducer
export const store = configureStore({
  reducer: {
    products: ProductsSlice,
  },
});