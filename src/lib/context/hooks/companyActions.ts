import { useAppDispatch, useAppSelector } from "./index";
import { setCompany, removeCompany } from "../slices/companySlice";
import { company } from "@/lib/constants/declarations";
export default function companyActions() {
    const dispatch = useAppDispatch();
    const UseSetCompany = (company: company) => dispatch(setCompany(company));
    const UseRemoveCompany = () => dispatch(removeCompany());
    const UseGetCompany = useAppSelector((state) => state.company);
    return { UseSetCompany, UseRemoveCompany, UseGetCompany };
}