import { Empresa } from "@/lib/constants/declarations";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {} as Empresa,
  reducers: {
    setCompany: (_, action: PayloadAction<Empresa>) => {
      return action.payload;
    },
    removeCompany: (_) => {
      return {} as Empresa;
    },
  },
});

export const { setCompany, removeCompany } = companySlice.actions;
export default companySlice.reducer;