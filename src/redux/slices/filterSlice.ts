import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SortDataType } from "../../pages/Home/Types";

export type FilterStateType = {
  searchValue: string;
  categoryValue: string;
  sortValue: SortDataType;
};

const initialState: FilterStateType = {
  searchValue: "",
  categoryValue: "Все",
  sortValue: {
    title: "популярности",
    sortBy: "price",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCategoryValue: (state, action: PayloadAction<string>) => {
      state.categoryValue = action.payload;
    },
    setSortValue: (state, action: PayloadAction<SortDataType>) => {
      state.sortValue = action.payload;
    },
  },
});

export const selectFilterSearch = (state: RootState) =>
  state.filter.searchValue;

export const { setSearchValue, setCategoryValue, setSortValue } = filterSlice.actions;

export default filterSlice.reducer;
