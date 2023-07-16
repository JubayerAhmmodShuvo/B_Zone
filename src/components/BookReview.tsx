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


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addReview({ id: bookId, comment });
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
            <label className="text-center " htmlFor="comment">
              Write a Review
            </label>
            <br />
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
              <p className="input input-bordered  bg-white input-secondary">
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
