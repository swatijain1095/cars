import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./carSlice";
import formSlice from "./formSlice";

export const store = configureStore({
    reducer: {cars: carSlice,
            form: formSlice},

})