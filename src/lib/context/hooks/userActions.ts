import { useAppDispatch } from "./index";
import { login, logout } from "../slices/userSlice";

import { user } from "@/lib/constants/declarations";
export default function userActions() {
    const dispatch = useAppDispatch();
    const loginAction = (user: user) => dispatch(login(user));
    const logoutAction = () => dispatch(logout());
    return { loginAction, logoutAction };
}