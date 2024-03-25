import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState : {
      name: '',
      value: '',
      id: null
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
        changeValue: (state, action) => {
            state.value = action.payload
        },
        changeId: (state, action) => {
            state.id = action.payload
        }
        },
});

export const { changeName, changeValue, changeId} = formSlice.actions;

export const carNameSelector = (state) => state.form.name;
export const carValueSelector = (state) => state.form.value;
export const carIdSelector = (state) => state.form.id;

export default formSlice.reducer;