import { UseAppDispatch, UseAppSelector } from "./index";
import { setCompany, removeCompany } from "../slices/companySlice";
import { Empresa } from "@/lib/constants/declarations";
export default function CompanyActions() {
    const dispatch = UseAppDispatch();
    const UseSetCompany = (company: Empresa) => dispatch(setCompany(company));
    const UseRemoveCompany = () => dispatch(removeCompany());
    const UseGetCompany = UseAppSelector((state) => state.company);
    return { UseSetCompany, UseRemoveCompany, UseGetCompany };
}