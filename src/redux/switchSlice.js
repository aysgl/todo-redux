import { createSlice } from '@reduxjs/toolkit';

const switchSlice = createSlice({
    name: 'switch',
    initialState: {
        type: "LIGHT",
    },
    reducers: {
        light: (state) => {
            state.type = "LIGHT"
        },
        dark: (state) => {
            state.type = "DARK"
        }
    },
});

export const { light, dark } = switchSlice.actions;

export default switchSlice.reducer;
