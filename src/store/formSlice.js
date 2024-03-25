import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    value: '',
    id: null,
    isNameError: false,
    isValueError: false
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        changeFormValue: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        resetForm: (state) => {
            return initialState;
        }
    },
});

export const { changeFormValue, resetForm } = formSlice.actions;

export const carFormSelector = (state) => state.form;

export default formSlice.reducer;