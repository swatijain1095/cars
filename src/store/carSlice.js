import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: 'cars',
    initialState : {
        value:[
            {
                id: 1,
                name: 'Kia Sonet',
                value: 15000
            },
            {
                id: 2,
                name: 'Kia Seltos',
                value: 20000
            },
            {
                id: 3,
                name: 'Kia Carens',
                value: 25000
            }
        ] ,
        highlightStr: ''
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
        remove: (state, action) => {
            const newValue = state.value.filter((car) => {
                return action.payload !== car.id
            })
            state.value = newValue;
        },
        updateHighlightStr: (state, action) => {
            state.highlightStr = action.payload
        }
    }
});

export const { add, remove, updateHighlightStr} = carSlice.actions;

export const carSelector = (state) => state.cars.value;
export const highlightStrSelector = (state) => state.cars.highlightStr;

export default carSlice.reducer;