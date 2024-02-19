import { user } from "@/lib/constants/declarations";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: { user: user | null } = {
    user: null
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (_, action: PayloadAction<user>) => {
            return {
                user: action.payload
            }
        },
        logout: () => {
            return { user: null }
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer