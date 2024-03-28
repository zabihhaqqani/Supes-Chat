import PostCard from "../components/productCard/PostCard";
import { useAuthContext } from "../context/authContext";
import { useDataContext } from "../context/dataContext";

const LikedPosts = () => {
  const { dataState } = useDataContext();
  const { authState } = useAuthContext();

  const likedPosts = dataState.posts?.filter((post) =>
    post.likes.likedBy.find(
      (currUser) => currUser.username === authState?.user?.username
    )
  );

  return (
    <div>
      {likedPosts.length > 0 ? (
        likedPosts.map((post) => {
          return <PostCard key={post?._id} post={post} />;
        })
      ) : (
        <p>No Liked Posts Yet!</p>
      )}
    </div>
  );
};

export default LikedPosts;
