import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: 'inputRef',
    initialState: {
        userData: '',
    },
    reducers: {
        getUserData: (state, action) => {
            state.userData = action.payload,
            console.log("data from redux", state.userData)
        }
    }
});

export const {getUserData} = messageSlice.actions;
export default messageSlice.reducer;