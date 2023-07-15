import BookCard from "../components/BookCard";
import { useGetLatestBookQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/globalTypes";


const Home = () => {

  const { data } = useGetLatestBookQuery(undefined);
 

  return (
    <div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 pb-20">
        {data?.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
