import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { useDataContext } from "../../context/dataContext";
import PostModal from "../PostModal";
import Comments from "../Comments";
import EditPostModal from "../EditPostModal";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";

const PostCard = ({ post, showComments }) => {
  const { dataDispatch, dataState } = useDataContext();

  const {
    content,
    createdAt,
    likes,
    updatedAt,
    username,
    mediaURL,
    _id,
    comments,
  } = post;
  const { authState } = useAuthContext();
  const [showEditModal, setShowEditModal] = useState(false);

  const navigate = useNavigate();

  const likedPosts = () =>
    likes?.likedBy?.filter(({ _id }) => _id === authState?.user?._id)
      ?.length !== 0;

  const bookmarkedPost = dataState?.bookmarks?.find((item) => item._id === _id);

  const userData = dataState?.users?.find(
    (user) => user?.username === username
  );

  return (
    <div className="lg:w-[450px] md:-[500px] flex flex-col gap-4  border p-4 m-1 rounded-lg">
      <TopSection
        username={username}
        userData={userData}
        _id={_id}
        createdAt={createdAt}
        content={content}
      />

      <p className="" onClick={() => navigate(`/post/${_id}`)}>
        {content}
      </p>
      <div className="rounded-sm">
        {mediaURL ? (
          <img
            className="rounded-sm object-cover"
            src={mediaURL}
            alt="img"
            onClick={() => navigate(`/post/${_id}`)}
          />
        ) : (
          ""
        )}
        <BottomSection
          likedPosts={likedPosts}
          likes={likes}
          bookmarkedPost={bookmarkedPost}
          _id={_id}
          comments={comments}
        />
      </div>

      {showEditModal && (
        <PostModal post={post} setShowEditModal={setShowEditModal} />
      )}

      {showComments && <Comments comments={comments} />}
    </div>
  );
};

export default PostCard;
