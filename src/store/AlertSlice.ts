import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Alert} from "../utils/types/Alert";

export const alertSlice = createSlice({
    name: 'alert',
    initialState: [] as Alert[],
    reducers: {
        createAlerte: ((state: Alert[], action: PayloadAction<Alert>) => {
            state.push(action.payload);
        }),
        removeAlerte: ((state: Alert[],  action: PayloadAction<Alert>) => {
            const index = state.findIndex(a => a.text === action.payload.text);
            state.splice(index, 1);
        })
    }
});

export const {createAlerte, removeAlerte} = alertSlice.actions;
export default alertSlice.reducer;
