import { company } from "@/lib/constants/declarations";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {} as company,
  reducers: {
    setCompany: (state, action: PayloadAction<company>) => {
      return action.payload ;
    },
    removeCompany: (state) => {
      return {} as company;
    },
  },
});

export const { setCompany, removeCompany } = companySlice.actions;
export default companySlice.reducer;