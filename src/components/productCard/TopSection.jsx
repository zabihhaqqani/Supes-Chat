import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/authContext";
import { useDataContext } from "../../context/dataContext";
import { deletePostHandler } from "../../utils/deletePostHandler";
import followUserHandler from "../../utils/followUserHandler";
import unFollowUserHandler from "../../utils/unFollowUserHandler";
import userFollowed from "../../utils/userFollowed";
import AvatarIcon from "../AvatarIcon";
import EditPostModal from "../EditPostModal";
import { Button } from "../ui/button";

const TopSection = ({ username, userData, _id, createdAt, content }) => {
  const { dataState, dataDispatch } = useDataContext();
  const { authState } = useAuthContext();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  const delteablePosts = authState?.user?.username === username;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState(content);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowOptions(false);
  };

  const handleSavePost = (editedContent) => {
    setPostContent(editedContent);
  };
  return (
    <div className="flex justify-between relative z-10 ">
      <div className="flex gap-2">
        <AvatarIcon username={username} avatar={userData?.avatar} />

        <div>
          <div className="flex items-center gap-6">
            <p
              onClick={() => {
                navigate(`/user/${username}`);
              }}
              className="font-[400]"
            >
              {`${userData?.firstName} ${userData?.lastName} `}
            </p>
          </div>

          <span
            onClick={() => {
              navigate(`/user/${username}`);
            }}
            className="font-[200] text-gray-400"
          >
            @{username}
          </span>
        </div>
      </div>

      <div className="flex flex-col ">
        <div>
          {showOptions && (
            <div className="absolute top-0 right-0 bg-white text-black border  border-black flex flex-col items-center gap-3 p-3 rounded-sm w-[120px]">
              <span
                className="cursor-pointer absolute  right-0 top-[-3px] text-lg"
                onClick={() => handleCloseModal()}
              >
                &times;
              </span>
              {showOptions && delteablePosts ? (
                <EditPostModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  postContent={postContent}
                  onSave={handleSavePost}
                  _id={_id}
                  token={authState?.token}
                  dataDispatch={dataDispatch}
                  content={content}
                />
              ) : (
                ""
              )}
              {delteablePosts && (
                <h4 onClick={() => setShowOptions(!showOptions)}>
                  {showOptions && (
                    <Button
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() =>
                        deletePostHandler(_id, authState?.token, dataDispatch)
                      }
                    >
                      Delete
                    </Button>
                  )}
                </h4>
              )}
              {!delteablePosts && showOptions && (
                <Button
                  className="follow-btn"
                  onClick={(e) => {
                    const followed = userFollowed(
                      dataState?.users,
                      userData?._id
                    );
                    if (followed) {
                      unFollowUserHandler(
                        userData?._id,
                        authState?.token,
                        dataDispatch
                      );
                      toast.success(`Unfollowed ${username}`);
                    } else {
                      followUserHandler(
                        userData?._id,
                        authState?.token,
                        dataDispatch
                      );
                      toast.success(`Following ${username}`);
                    }
                    setShowOptions(!showOptions);
                  }}
                >
                  {userFollowed(dataState?.users, userData?._id)
                    ? "UnFollow"
                    : "Follow"}
                </Button>
              )}
            </div>
          )}
        </div>
        <div className="flex gap-3 right-0 top-0">
          {!showOptions && (
            <i
              className="fa-solid fa-ellipsis"
              onClick={(e) => {
                setShowOptions(!showOptions);
              }}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
