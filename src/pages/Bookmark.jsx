import PostCard from "../components/productCard/PostCard";
import { useDataContext } from "../context/dataContext";

const BookMarks = () => {
  const { dataState } = useDataContext();

  const bookmarkedPosts = (id) =>
    dataState?.posts?.filter((post) => post?._id === id)[0];

  return (
    <div>
      {dataState.bookmarks.length > 0 ? (
        dataState?.bookmarks?.map((post) => {
          return <PostCard key={post?._id} post={bookmarkedPosts(post?._id)} />;
        })
      ) : (
        <p>No Bookmarks Yet!</p>
      )}
    </div>
  );
};

export default BookMarks;
