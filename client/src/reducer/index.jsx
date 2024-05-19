import { combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "../slices/darkModeSlice";
const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});

export default rootReducer;
