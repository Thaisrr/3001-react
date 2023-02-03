import {createSlice} from "@reduxjs/toolkit";

export type UserState = {isLogged: boolean};
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogged: false
    } as UserState,
    reducers: {
        setLogged: (state: UserState) => {
            state.isLogged = true;
        },
        setLogout: (state: UserState) => {
            state.isLogged = false;
        }
    }
})

export const {setLogged, setLogout} = userSlice.actions;
export default userSlice.reducer;
