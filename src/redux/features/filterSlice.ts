import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  searchQuery: string;
  genreFilter: string;
  yearFilter: string;
}

const initialState: FilterState = {
  searchQuery: "",
  genreFilter: "",
  yearFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setGenreFilter: (state, action: PayloadAction<string>) => {
      state.genreFilter = action.payload;
    },
    setYearFilter: (state, action: PayloadAction<string>) => {
      state.yearFilter = action.payload;
    },
    clearFilters: (state) => {
      state.searchQuery = "";
      state.genreFilter = "";
      state.yearFilter = "";
    },
  },
});

export const { setSearchQuery, setGenreFilter, setYearFilter, clearFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
