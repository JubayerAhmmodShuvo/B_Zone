import { IBook } from "../types/globalTypes";

interface BookCardProps {
  book: IBook;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const formattedDate = new Date(book.publicationDate).toLocaleDateString();

  return (
    <div>
      <div className="card h-96 border bg-secondary-content">
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <h3>Author: {book.author}</h3>
          <p>Genre: {book.genre}</p>
          <p>Publication_Date: {formattedDate}</p>

          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
