import { UseAppDispatch, UseAppSelector } from "./index";
import { setCompany, removeCompany } from "../slices/companySlice";
import { company } from "@/lib/constants/declarations";
export default function companyActions() {
    const dispatch = UseAppDispatch();
    const UseSetCompany = (company: company) => dispatch(setCompany(company));
    const UseRemoveCompany = () => dispatch(removeCompany());
    const UseGetCompany = UseAppSelector((state) => state.company);
    return { UseSetCompany, UseRemoveCompany, UseGetCompany };
}