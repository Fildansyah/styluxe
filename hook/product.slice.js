import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: { 
    selectedProduct: null 
},
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    
  },
});

export const { setSelectedProduct } = productSlice.actions;
export const selectedProductState = (state) => state.product.selectedProduct

export default productSlice.reducer;