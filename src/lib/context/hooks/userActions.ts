import { useAppDispatch, useAppSelector } from "./index";
import { login, logout } from "../slices/userSlice";

import { user } from "@/lib/constants/declarations";
export default function userActions() {
    const dispatch = useAppDispatch();
    const useLogin = (user: user) => dispatch(login(user));
    const useLogout = () => dispatch(logout());
    const useGetUser = useAppSelector((state) => state.user.user);
    return { useLogin, useLogout, useGetUser };
}