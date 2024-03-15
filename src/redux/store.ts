import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../redux/slices/filterSlice";
import filmsReducer from "../redux/slices/filmsSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    films: filmsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
