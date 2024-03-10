import { UseAppDispatch, UseAppSelector } from "./index";
import { login, logout } from "../slices/userSlice";

import { Usuario } from "@/lib/constants/declarations";
export default function UserActions() {
    const dispatch = UseAppDispatch();
    const UseLogin = (user: Usuario) => dispatch(login(user));
    const UseLogout = () => dispatch(logout());
    const UseGetUser = UseAppSelector((state) => state.user);
    return { UseLogin, UseLogout, UseGetUser };
}