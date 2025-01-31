import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserWithTokens} from "../../models/IUserWithTokens.ts";



const initialState = {
    user: JSON.parse(localStorage.getItem("user") || "null"),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action:PayloadAction<IUserWithTokens>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;