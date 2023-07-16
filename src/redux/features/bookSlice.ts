import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { useGetBooksQuery } from "../api/apiSlice";

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

interface BooksState {
  books: Book[];
  searchQuery: string;
  genreFilter: string;
  yearFilter: string;
}

const initialState: BooksState = {
  books: [],
  searchQuery: "",
  genreFilter: "",
  yearFilter: "",
};

export const fetchBooks = createAsyncThunk("allbooks/fetchBooks", async () => {
  const { data } = await useGetBooksQuery(undefined);
  return data;
});

const booksSlice = createSlice({
  name: "books",
  initialState,
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

export const selectFilteredBooks = (state: RootState) => {
  const { searchQuery, genreFilter, yearFilter, books } = state.books;

  return books.filter((book) => {
    const titleMatch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const authorMatch = book.author
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const genreMatch = book.genre
      .toLowerCase()
      .includes(genreFilter.toLowerCase());
    const yearMatch = book.publicationDate.includes(yearFilter);

    return titleMatch || authorMatch || genreMatch || yearMatch;
  });
};

export default booksSlice.reducer;
