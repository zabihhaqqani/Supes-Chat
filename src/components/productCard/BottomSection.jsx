import { useNavigate } from "react-router-dom";
import { postUnlikeHandler } from "../../utils/postUnlikeHandler";
import { postLikeHandler } from "../../utils/postLikeHandler";
import removeBookmarkHandler from "../../utils/removeBookmarkHandler";
import addBookmarkHandler from "../../utils/addBookmarkHandler";
import { toast } from "react-toastify";
import { useDataContext } from "../../context/dataContext";
import { useAuthContext } from "../../context/authContext";

const BottomSection = ({
  likedPosts,
  likes,
  bookmarkedPost,
  _id,
  comments,
}) => {
  const navigate = useNavigate();
  const { dataDispatch } = useDataContext();
  const { authState } = useAuthContext();

  return (
    <div className="flex items-center justify-between  w-full mt-2 border-t-2 px-4 pr-5 py-2 pb-0">
      <div
        className="cursor-pointer  p-2 rounded-sm"
        onClick={() => {
          if (!authState?.token) {
            // toast.error("Please login to proceed!");
          } else {
            likedPosts()
              ? postUnlikeHandler(_id, authState?.token, dataDispatch)
              : postLikeHandler(_id, authState?.token, dataDispatch);
          }
        }}
      >
        <i
          className={`${
            likedPosts() ? "fa-solid" : "fa-regular"
          } fa-heart lg:fa-lg`}
        ></i>{" "}
        <span>{likes?.likeCount}</span>
      </div>

      <div
        className="cursor-pointer p-2 rounded-sm"
        onClick={() => navigate(`/post/${_id}`)}
      >
        <i className="far fa-comment lg:fa-lg "></i>{" "}
        <span>{comments?.length ?? 0}</span>
      </div>

      <div className="cursor-pointer  p-2 rounded-sm">
        {bookmarkedPost ? (
          <i
            onClick={() => {
              removeBookmarkHandler(_id, authState?.token, dataDispatch);
              toast.success("Removed From Bookmark");
            }}
            className="fas fa-bookmark lg:fa-lg"
          ></i>
        ) : (
          <i
            onClick={() => {
              addBookmarkHandler(_id, authState?.token, dataDispatch);
              toast.success("Added To Bookmark");
            }}
            className="far fa-bookmark lg:fa-lg"
          ></i>
        )}
      </div>
      <i
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          toast.success("URL copied!");
        }}
        className="fas fa-share lg:fa-lg"
      ></i>
    </div>
  );
};

export default BottomSection;
