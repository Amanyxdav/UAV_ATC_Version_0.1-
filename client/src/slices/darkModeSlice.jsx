import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")) : false
}

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: initialState,
    reducers: {
        setDarkMode: (state, value) => {
            state.darkMode = value.payload;
        }
    }
})

export const { setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;