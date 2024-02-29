import { useAppDispatch, useAppSelector } from "./index";
import { login, logout } from "../slices/userSlice";

import { user } from "@/lib/constants/declarations";
export default function UserActions() {
    const dispatch = useAppDispatch();
    const UseLogin = (user: user) => dispatch(login(user));
    const UseLogout = () => dispatch(logout());
    const useGetUser = useAppSelector((state) => state.user.user);
    return { UseLogin, UseLogout, useGetUser };
}