import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: { 
    selectedProduct: null,
    selectedCategory: "",
},
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  },
});

export const { setSelectedProduct, setSelectedCategory } = productSlice.actions;

export const selectedProductState = (state) => state.product.selectedProduct;
export const selectedCategoryState = (state) => state.product.selectedCategory;

export default productSlice.reducer;