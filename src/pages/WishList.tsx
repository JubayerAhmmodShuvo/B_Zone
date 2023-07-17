import WishListData from "../components/WishListData";
import { useGetWishListQuery } from "../redux/api/apiSlice";

const WishList = () => {
  const {
    data: wishlistData,
    isLoading,
    isError,
  } = useGetWishListQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 2000,
  });

  if (isLoading) {
    return <p>Loading wishlist...</p>;
  }

  if (isError) {
    return <p>Error fetching wishlist.</p>;
  }

  return <WishListData list={wishlistData} />;
};

export default WishList;
