import React from "react";
import { RootState } from "../redux/store";
import {
  setSearchQuery,
  setGenreFilter,
  setYearFilter,
} from "../redux/features/filterSlice.ts";
import { IBook } from "../types/globalTypes";
import { useAppDispatch, useAppSelector } from "../redux/hook.ts";

interface Props {
  data: IBook[] | undefined;
  onFilterChange: (filteredBooks: IBook[] | null) => void;
}

const SearchAndFilter = ({ data, onFilterChange }: Props) => {
  const { searchQuery, genreFilter, yearFilter } = useAppSelector(
    (state: RootState) => state.filter
  );
  const dispatch = useAppDispatch();

  const availableGenres = Array.from(
    new Set(data?.map((book) => book.genre)) || []
  );

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1800 + 1 }, (_, index) =>
    (currentYear - index).toString()
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleGenreFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenreFilter(e.target.value));
  };

  const handleYearFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setYearFilter(e.target.value));
  };

  React.useEffect(() => {
    let filteredBooks: IBook[] | null = null;
    if (data) {
      filteredBooks = data;
      if (searchQuery) {
        filteredBooks = filteredBooks.filter(
          (book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      if (genreFilter) {
        filteredBooks = filteredBooks.filter(
          (book) => book.genre === genreFilter
        );
      }
      if (yearFilter) {
        filteredBooks = filteredBooks.filter(
          (book) =>
            new Date(book.publicationDate).getFullYear().toString() ===
            yearFilter
        );
      }
    }

    onFilterChange(filteredBooks);
  }, [data, searchQuery, genreFilter, yearFilter, onFilterChange]);

  return (
    <div className="grid">
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        className="input input-bordered  bg-white input-secondary w-full my-4 max-w-xs  mb-12"
        onChange={handleSearchChange}
      />
      <select
        className="input input-bordered  bg-white input-secondary w-full my-4 max-w-xs mb-10"
        value={genreFilter}
        onChange={handleGenreFilterChange}
      >
        <option value="">All Genres</option>
        {availableGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select
        className="input input-bordered  bg-white input-secondary w-full my-4 max-w-xs mb-10"
        value={yearFilter}
        onChange={handleYearFilterChange}
      >
        <option value="">All Years</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndFilter;
