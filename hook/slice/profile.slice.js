import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        address: [],
    },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload;
        },
    },
});

export const { setAddress } = profileSlice.actions;

export const addressState = (state) => state.profile.address;

export default profileSlice.reducer;