import { Usuario } from "@/lib/constants/declarations";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: Usuario = {} as Usuario



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (_, action: PayloadAction<Usuario>) => {
            return action.payload
        },
        logout: () => { }
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer