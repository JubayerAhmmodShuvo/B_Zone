import { useState, FormEvent } from "react";
import { useGetBookReviewsQuery, usePostReviewMutation } from "../redux/api/apiSlice";
import { IReview } from "../types/globalTypes";


interface BookReviewProps {
  bookId: string;
}

const BookReview = ({ bookId }: BookReviewProps) => {
  const [comment, setComment] = useState("");
  const [addReview, { isLoading, isError, isSuccess }] =
    usePostReviewMutation();
    const { data: reviews, isLoading: isReviewsLoading } =
      useGetBookReviewsQuery(bookId, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 3000,
      });

  const email = localStorage.getItem("email");

  


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addReview({ id: bookId, comment, user: email });
    setComment("");
  };

  return (
    <div className=" mb-20">
      <div className="my-5 items-center">
        <h3 className=" items-center text-3xl text-center font-serif font-bold text-accent">
          Add Review
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="text-center items-center mt-10">
            <label  htmlFor="comment">
             Waiting for your valuable Review
            </label>
            <br />
            <p>
              You are logged in as <span className="font-serif text-lg" >{email}</span>
            </p>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="input input-bordered  bg-white input-secondary w-full my-4 max-w-xs"
              required
            />
          </div>
          <div className="text-center items-center">
            <button
              className=" btn  btn-primary justify-center"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Adding Review..." : "Add Review"}
            </button>
          </div>
          {isError && <p>Error adding review.</p>}
          {/* Show the success message when isSuccess is true */}
          {isSuccess && <p>Review added successfully.</p>}
        </form>
      </div>
      <div className="my-5 items-center">
        <h3 className="items-center text-3xl text-center font-serif font-bold text-accent">
          All The Reviews
        </h3>

        {isReviewsLoading ? (
          <p>Loading reviews...</p>
        ) : (
          reviews?.map((review: IReview) => (
            <div key={review._id} className="my-3  ">
              <h3 className="my-1 text-lg p-2 font-serif">
                User: {review.user}
              </h3>
              <p className="input input-bordered  bg-white input-secondary p-2">
                {review.comment}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookReview;
