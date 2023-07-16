import { Props } from "../types/globalTypes";



const WishListData = ({ list }: Props) => {
  return (
    <div className="grid grid-cols-6 mb-20 ">
      {list.map((item) => (
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