import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, action)=>{
            console.log("Slice action>>>>>>>",action,   "Slice State>>>>>>",state);
            state.data = action.payload;
        },
    }
})

export const {loaduser} = userSlice.actions;
export default userSlice.reducer;