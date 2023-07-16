// SearchAndFilter.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setGenreFilter,
  setSearchQuery,
  setYearFilter,
  selectFilteredBooks,
} from "../redux/features/bookSlice";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const SearchAndFilter = () => {
  const dispatch = useAppDispatch();
  const { searchQuery, genreFilter, yearFilter } = useAppSelector(
    (state: RootState) => state.books
  );

  const filteredBooks = useAppSelector(selectFilteredBooks);

  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedSearchQuery(e.target.value);
  };

  const handleGenreFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenreFilter(e.target.value));
  };

  const handleYearFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setYearFilter(e.target.value));
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(setSearchQuery(debouncedSearchQuery));
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [debouncedSearchQuery, dispatch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        value={debouncedSearchQuery}
        onChange={handleSearchChange}
      />
      <select value={genreFilter} onChange={handleGenreFilterChange}>
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-fiction">Non-fiction</option>
        {/* Add more genre options */}
      </select>
      <select value={yearFilter} onChange={handleYearFilterChange}>
        <option value="">All Years</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        {/* Add more year options */}
      </select>

      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div key={book._id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            {/* Add more book details */}
          </div>
        ))
      ) : (
        <p>No books match the selected criteria.</p>
      )}
    </div>
  );
};

export default SearchAndFilter;
