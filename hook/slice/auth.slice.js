import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        biodata: {},
        token: null,
    },
    reducers: {
        setBiodata: (state, action) => {
            state.biodata = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    },
});

export const { setBiodata, setToken } = authSlice.actions;

export const biodataState = (state) => state.auth.biodata;
export const tokenState = (state) => state.auth.token;

export default authSlice.reducer;