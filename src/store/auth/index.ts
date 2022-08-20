import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
    authState: false,
    address: ''
};

// Actual Slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        // Action to set the authentication status
        setAuthState(state, action) {
            state.authState = action.payload;
        },

        setAddress(state, action) {
            state.address = action.payload;
        },

        // Special reducer for hydrating the state. Special case for next-redux-wrapper
        extraReducers: (builder: any) => {
            builder.addCase(HYDRATE, (state: any, action: any) => {
                state = { ...state, ...action.payload }
            })
        }
        // extraReducers: {
        //     [HYDRATE]: (state: any, action: any) => {
        //         return {
        //             ...state,
        //             ...action.payload.auth,
        //         };
        //     },
        // },
    },
});

export const { setAuthState, setAddress } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth;

export default authSlice.reducer;