import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/product.slice";
import authSlice from "./slice/auth.slice";
import { authApi } from "./api/authApi";
import { profileApi } from "./api/profileAPI";

const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, profileApi.middleware),
});

export default store;
