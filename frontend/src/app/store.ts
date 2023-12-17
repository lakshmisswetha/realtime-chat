import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";

const rootReducer = combineReducers({
    user: userSlice,
});

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export default store;
