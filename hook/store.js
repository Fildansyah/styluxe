import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/product.slice";
import authSlice from "./slice/auth.slice";
import { authApi } from "./api/authApi";
import { profileApi } from "./api/profileAPI";
import { addressApi } from "./api/addressApi";
import profileSlice from "./slice/profile.slice";
import discussionSlice from "./slice/discussion.slice";

const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
    profile: profileSlice,
    discussion: discussionSlice,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      profileApi.middleware,
      addressApi.middleware
    ),
});

export default store;
