import  { useState } from "react";
import { usePostBookMutation } from "../redux/api/apiSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  const [postBook, { isLoading, isSuccess, isError, error }] =
    usePostBookMutation();

const handleAddBook = () => {
  if (!title || !author || !genre || !publicationDate) {
    alert("Please fill in all the fields.");
    return;
  }

  postBook({
    title,
    author,
    genre,
    publicationDate,
  })
    .unwrap()
    .then(() => {
      setTitle("");
      setAuthor("");
      setGenre("");
      setPublicationDate("");
    });
};


  return (
    <div className=" form-control items-center">
      <h1 className="font-bold text-xl">Add Book</h1>
      {isSuccess && (
        <p className=" font-sans text-2xl text-green-400/100">Book added successfully!</p>
      )}
      {isError && <p>Error adding book: {error?.toString()}</p>}
      <form>
        <div>
          <label className="font-bold text-lg">Title:</label>
          <br />
          <input
            className="input input-bordered input-secondary bg-white w-96 max-w-xs my-4"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="font-bold text-lg">Author:</label>
          <br />
          <input
            className="input input-bordered input-secondary bg-white w-full max-w-xs my-4"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label className="font-bold text-lg">Genre:</label>
          <br />
          <input
            className="input input-bordered input-secondary bg-white w-full max-w-xs my-4"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label className="font-bold text-lg">Publication Date:</label>
          <br />
          <input
            className="input  input-bordered input-secondary bg-white w-full max-w-xs my-4"
            type="date"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary  mx-auto mb-20"
          type="button"
          onClick={handleAddBook}
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
