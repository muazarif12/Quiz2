import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    datas: [],
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.datas = action.payload;
        },
    },
});

export const { setData } = appSlice.actions;
export default appSlice;