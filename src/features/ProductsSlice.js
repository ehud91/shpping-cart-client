import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collectProducts: [],
};

// Create a slice of state called 'products'
const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      // You can add reducers here if you need to modify the state
      setProductsByCategory(state, action) {
        state.collectProducts = action.payload;
      },

      addProducts(state, action) {
        const { selectedCategoriesMap } = action.payload;
      
        console.log('selectedCategoriesMap', selectedCategoriesMap);
        state.collectProducts.push(selectedCategoriesMap);
      },
    },
  });

  // Export the action and reducer
export const { setProductsByCategory, addProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;