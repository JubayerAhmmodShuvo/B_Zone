import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/api/apiSlice";

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: book } = useSingleBookQuery(id);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
  });

  const [updateBook, { isLoading, isSuccess, isError }] =
    useUpdateBookMutation();

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        author: book.author,
        genre: book.genre,
        publicationDate: new Date(book.publicationDate)
          .toISOString()
          .slice(0, 10),
      });
    }
  }, [book]);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    updateBook({ id, ...formData })
      .unwrap()
      .then(() => {
      alert(`Updated ${formData.title}!`);
        navigate(`/book-details/${id}`,);
      })
      .catch((error) => {
        alert(`You are not the author to update this book`);
      });
  };

  return (
    <div className="items-center justify-center ">
      <h2 className="text-center text-2xl font-bold font-serif mb-5">Update Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="items-center text-center justify-center text-lg">
          <label>Title:</label>
          <br />
          <input
            className="input input-bordered  bg-white input-secondary w-full my-4 max-w-xs"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="items-center text-center justify-center">
          <label>Author:</label>
          <br />
          <input
            className="input input-bordered  bg-white input-secondary w-full my-4 max-w-xs"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="items-center text-center justify-center">
          <label>Genre:</label>
          <br />
          <input
            className="input input-bordered  bg-white input-secondary w-full my-4 max-w-xs"
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="items-center text-center justify-center">
          <label>Publication Date:</label>
          <br />
          <input
            className="input input-bordered  bg-white input-secondary w-full my-4 max-w-xs"
            type="date"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-center items-center mb-10">
          <button
            className="btn btn-success justify-center"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Book"}
          </button>
        </div>
        {isError && <p>Error updating book.</p>}
        {isSuccess && <p>Book updated successfully.</p>}
      </form>
    </div>
  );
};

export default UpdateBook;
