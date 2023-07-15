import { IBook } from "../types/globalTypes";
import { Link } from "react-router-dom";


interface BookCardProps {
  book: IBook;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const formattedDate = new Date(book.publicationDate).toLocaleDateString();

  return (
    <div>
      <div className="card h-96 border bg-secondary-content">
        <div className="card-body">
          <Link to={`/book-details/${book._id}`} className="w-full">
            <h2 className="card-title">{book.title}</h2>
            <h3>Author: {book.author}</h3>
            <p>Genre: {book.genre}</p>
          </Link>
          <p>Publication_Date: {formattedDate}</p>

          <div className="card-actions">
            <button className="btn btn-accent w-full ">Add To Wishlist</button>
            <button className="btn btn-accent w-full">
              Add To Readinglist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
