import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import companySlice from "./slices/companySlice";
export const store = configureStore({
    reducer: {
        user: userSlice,
        company: companySlice
    }
})

export default store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch