import { useAddToReadingListMutation, useAddToWishlistMutation } from "../redux/api/apiSlice";
import useAuth from "../redux/features/useAuth";
import { IBook } from "../types/globalTypes";
import { Link } from "react-router-dom";


interface BookCardProps {
  book: IBook;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { isAuthenticated,email } = useAuth();
  const { _id } = book;
  const formattedDate = new Date(book.publicationDate).toLocaleDateString();
  const [addToWishlist, { isLoading: isAddingToWishlist }] =
    useAddToWishlistMutation();
 const [addToReadingList, { isLoading: isAddingToReadingList }] =
    useAddToReadingListMutation();
  
  
  const handleAddToWishlist = () => {
    if (!isAuthenticated) {
      alert("You need to be authenticated to add a book to your wishlist");
      return;
    }
    addToWishlist(_id);
  };
   const handleAddToReadingList = () => {
     addToReadingList(_id);
   };

  return (
    <div>
      <div className="card h-96 border bg-secondary-content">
        <div className="card-body ">
          <div className="p-6 mb-5">
            <Link to={`/book-details/${book._id}`} className="w-full">
              <h2 className="card-title ">{book.title}</h2>
              <h3>Author: {book.author}</h3>
              <p>Genre: {book.genre}</p>
              <p className="">Publication_Date: {formattedDate}</p>
            </Link>
          </div>

          <div className="card-actions">
            <button
              className="btn btn-accent w-full"
              onClick={handleAddToWishlist}
            >
              {isAddingToWishlist ? "Adding..." : "Add To Wishlist"}
            </button>
            <button
              className="btn btn-accent w-full"
              onClick={handleAddToReadingList}
            >
              {isAddingToReadingList ? "Adding..." : "Add To Reading List"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
