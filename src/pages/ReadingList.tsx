import ReadingListData from "../components/ReadingListData";
import { useGetReadingListQuery } from "../redux/api/apiSlice";

const ReadingList = () => {
  const {
    data: readingListData,
    isLoading,
    isError,
  } = useGetReadingListQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 2000,
  });

  if (isLoading) {
    return <p>Loading reading list...</p>;
  }

  if (isError) {
    return <p>Error fetching reading list.</p>;
  }

  return <ReadingListData list={readingListData} />;
};

export default ReadingList;
