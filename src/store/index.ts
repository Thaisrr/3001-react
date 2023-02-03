import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import alertReducer from "./AlertSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        alert: alertReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
