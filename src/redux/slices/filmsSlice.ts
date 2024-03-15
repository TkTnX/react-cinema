import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type FetchFilmsType = {
  currentPage: number;
  categoryValue: string;
  sortValue: string;
};

export const fetchFilms = createAsyncThunk(
  "films/fetchFilms",
  async (params: FetchFilmsType) => {
    const { currentPage, categoryValue, sortValue } = params;
    const res = await axios.get(
      `https://3bf477bc2596f0b4.mokky.dev/films?limit=4&page=${currentPage}&${
        categoryValue !== "Все" ? `category=${categoryValue}` : ""
      }&sortBy=${sortValue}`
    );
    return res.data.items;
  }
);

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  FAILED = "failed",
}

const initialState = {
  filmsArr: [],
  loading: "loading",
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilms: (state, action) => {
      state.filmsArr = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.rejected, (state) => {
      state.filmsArr = [];
      Status.FAILED;
      state.loading = "failed";
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.filmsArr = action.payload;
      Status.SUCCESS;
      state.loading = "success";
    });
    builder.addCase(fetchFilms.pending, (state) => {
      state.filmsArr = [];
      Status.LOADING;
      state.loading = "loading";
    });
  },
});

export const { setFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
