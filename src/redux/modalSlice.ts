import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
};

export const modalSlice = createSlice( {
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, {payload}) => {
            state.isOpen = payload
            console.log(state.isOpen)
        },
        closeModal: (state, {payload}) => {
            state.isOpen = payload
        },
    }
});


export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer;