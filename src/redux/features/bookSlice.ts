import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetBooksQuery } from "../api/apiSlice";


export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const { data } = await useGetBooksQuery(undefined);
  return data;
});

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    searchQuery: "",
    genreFilter: "",
    yearFilter: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setGenreFilter: (state, action) => {
      state.genreFilter = action.payload;
    },
    setYearFilter: (state, action) => {
      state.yearFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export const { setSearchQuery, setGenreFilter, setYearFilter } =
  booksSlice.actions;
export default booksSlice.reducer;
