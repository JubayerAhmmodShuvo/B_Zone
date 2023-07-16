

interface Props {
  wishlistData: {
    _id: string;
    book: {
      title: string;
      author: string;
      genre: string;
     
    };
  }[];
}

const WishListData = ({ wishlistData }: Props) => {
  return (
    <div className="grid grid-cols-6 mb-20 ">
      {wishlistData.map((item) => (
        <div className="card h-48 border bg-secondary-content">
          <div className="card-body bg-slate-300 rounded" key={item._id}>
            <h3>{item.book.title}</h3>
            <p>Author: {item.book.author}</p>
            <p>Genre: {item.book.genre}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishListData;