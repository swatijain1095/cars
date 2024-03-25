import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState : {
      name: '',
      value: ''
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
        changeValue: (state, action) => {
            state.value = action.payload
        }
        },
});

export const { changeName, changeValue} = formSlice.actions;

export const carNameSelector = (state) => state.form.name;
export const carValueSelector = (state) => state.form.value;

export default formSlice.reducer;