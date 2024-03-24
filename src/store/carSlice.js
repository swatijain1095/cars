import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: 'cars',
    initialState : [
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
    ],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            return state.filter((car) => {
                return action.payload !== car.id
            })
        }
    }
});

export const { add, remove} = carSlice.actions;

export const carSelector = (state) => state.cars;

export default carSlice.reducer;