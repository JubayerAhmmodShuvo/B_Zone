import BookReview from "../components/BookReview";
import { useDeleteBookMutation, useSingleBookQuery } from "../redux/api/apiSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const { data: book } = useSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 2000,
  });
  const formattedDate = book
    ? new Date(book.publicationDate).toLocaleDateString()
    : "";
   const [deleteBook, { isLoading: isDeleteLoading, isError: isDeleteError }] =
     useDeleteBookMutation();

   const handleDelete = () => {
     if (window.confirm("Are you sure you want to delete this book?")) {
       deleteBook(id)
         .unwrap()
         .then(() => {
           navigate("/");
           console.log(isDeleteError);
           console.log(isDeleteLoading);
         })
         .catch((error) => {
           console.log("Error deleting book:", error);
         });
     }
   };

  
  

  return (
    <div>
      <div className="card h-96 w-96 mx-auto mb-24 border bg-secondary-content">
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          <h3>Author: {book?.author}</h3>
          <p>Genre: {book?.genre}</p>
          <p>Publication_Date: {formattedDate}</p>

          <div className="card-actions justify-end">
            <Link to={`/books/${id}/update`} className="btn btn-primary w-24">
              Edit
            </Link>
            <button onClick={handleDelete} className="btn btn-error w-24">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="divider"></div>
      {id && <BookReview bookId={id} />}
    </div>
  );
};

export default BookDetails;
