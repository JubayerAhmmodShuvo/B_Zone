import  { useState } from "react";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import BookCard from "../components/BookCard";
import { IBook } from "../types/globalTypes";
import SearchAndFilter from "../components/SearchAndFilter";

const AllBooks = () => {
  const { data } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 2000,
  });

  const [filteredData, setFilteredData] = useState<IBook[] | null>(null);

  const handleFilterChange = (filteredBooks: IBook[] | null) => {
    setFilteredData(filteredBooks);
  };

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative">
      <div className="lg:col-span-3  col-span-12    mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start">
        <SearchAndFilter data={data} onFilterChange={handleFilterChange} />
      </div>
      <div className="lg:col-span-9   col-span-12 gap-10 pb-20">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  ">
          {filteredData
            ? filteredData.map((book: IBook) => (
                <BookCard key={book._id} book={book} />
              ))
            : data?.map((book: IBook) => (
                <BookCard key={book._id} book={book} />
              ))}
          {filteredData && filteredData.length === 0 && (
            <p>No books match the selected criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
