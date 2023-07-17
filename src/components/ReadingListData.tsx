import { useState, useEffect } from "react";
import { Props } from "../types/globalTypes";

interface CompletedBooks {
  [key: string]: boolean;
}

const ReadingListData = ({ list }: Props) => {
  const [completedBooks, setCompletedBooks] = useState<CompletedBooks>({});

  useEffect(() => {
    const storedCompletedBooks = localStorage.getItem("completedBooks");

    if (storedCompletedBooks) {
      setCompletedBooks(JSON.parse(storedCompletedBooks));
    }
  }, []);

  const handleCompleteClick = (bookId: string) => {
    const confirmCompletion = window.confirm(
      "Have you completed reading this book?"
    );
    if (confirmCompletion) {
      setCompletedBooks((prevCompletedBooks) => ({
        ...prevCompletedBooks,
        [bookId]: true,
      }));

      localStorage.setItem(
        "completedBooks",
        JSON.stringify({
          ...completedBooks,
          [bookId]: true,
        })
      );
    }
  };

  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 mb-20">
      {list.map((item) => (
        <div className="card h-48 border bg-secondary-content" key={item._id}>
          <div className="card-body bg-slate-300 rounded">
            <h3>{item.book.title}</h3>
            <p>Author: {item.book.author}</p>
            <p>Genre: {item.book.genre}</p>
            {!completedBooks[item._id] && (
              <button
                className="btn btn-success"
                onClick={() => handleCompleteClick(item._id)}
              >
                Completed
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadingListData;
