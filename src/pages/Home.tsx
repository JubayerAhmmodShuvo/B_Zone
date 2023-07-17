import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useGetLatestBookQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/globalTypes";


const Home = () => {

  const { data } = useGetLatestBookQuery(undefined,   {refetchOnMountOrArgChange: true,
    pollingInterval: 2000},);
 

  return (
    <div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 pb-20">
        {data?.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
      <div className="items-center text-center justify-center">
       
        <button className="btn btn-primary mb-10 items-center text-center justify-center">
          <Link to="/allbooks">All Books</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
