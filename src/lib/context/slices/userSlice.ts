import { user } from "@/lib/constants/declarations";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: user = {} as user



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (_, action: PayloadAction<user>) => {
            return action.payload
        },
        logout: () => { }
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer