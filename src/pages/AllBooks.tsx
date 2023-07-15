import { useGetBooksQuery } from "../redux/api/apiSlice";
import BookCard from "../components/BookCard";
import { IBook } from "../types/globalTypes";

const AllBooks = () => {
  const { data } = useGetBooksQuery(undefined);

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative">
      <div className="lg:col-span-3 col-span-12  mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start">
        {/* Add your content here */}
        <h2>Sidebar Content</h2>
        <p>Some additional information or navigation links</p>
      </div>
      <div className="lg:col-span-9  col-span-12 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 pb-20">
        {data?.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
