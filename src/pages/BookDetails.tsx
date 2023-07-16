import BookReview from "../components/BookReview";
import { useSingleBookQuery } from "../redux/api/apiSlice";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book } = useSingleBookQuery(id);
  const formattedDate = book
    ? new Date(book.publicationDate).toLocaleDateString()
    : "";

  return (
    <div>
      <div className="card h-96 w-96 mx-auto mb-24 border bg-secondary-content">
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          <h3>Author: {book?.author}</h3>
          <p>Genre: {book?.genre}</p>
          <p>Publication_Date: {formattedDate}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary w-24">Edit </button>
            <button className="btn btn-error w-24">Delete</button>
          </div>
        </div>
      </div>
      

     <div className="divider"></div> 
     { id && <BookReview bookId={id} />}

    </div>
  );
};

export default BookDetails;
