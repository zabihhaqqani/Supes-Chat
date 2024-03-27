import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";
import { useDataContext } from "../context/dataContext";
import followUserHandler from "../utils/followUserHandler";
import { getUserPosts } from "../utils/getUserPosts";
import unFollowUserHandler from "../utils/unFollowUserHandler";
import userFollowed from "../utils/userFollowed";
import EditProfileModal from "./EditProfileModal";
import { Button } from "./ui/button";

const UserProfileCard = ({ userProfile }) => {
  const { dataState, dataDispatch } = useDataContext();
  const { userLogout, authState } = useAuthContext();

  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();
  // const { _id,firstName, lastName, username, email, bio ,following,followers} = userProfile;
  const userLoggedIn = authState?.user?.username === userProfile?.username;

  const userPosts = getUserPosts(dataState?.posts, userProfile);

  const onClose = () => setModalState(false);

  return (
    <div
      className="p-2 bg-cover lg:w-[450px] w-full flex justify-center flex-col"
      // style={{
      //   backgroundImage: `url('${userProfile?.backgroundImg}')`,
      // }}
    >
      <div className="flex justify-between items-center ">
        <img
          src={
            userProfile?.avatar ??
            "https://fastly.picsum.photos/id/100/150/150.jpg?hmac=uGUauJoHAFEamhXY6HLrXsmhPdapec4KAi8TqFasrQo"
          }
          alt="avatar"
          className="h-[100px] w-[100px] rounded-[50%] object-cover"
        />

        {userLoggedIn || modalState ? (
          <EditProfileModal
            data={userProfile}
            dataDispatch={dataDispatch}
            token={authState?.token}
            closeModal={onClose}
            // website={}
          />
        ) : (
          <Button
            style={{ height: "50%" }}
            onClick={(e) => {
              if (userFollowed(dataState?.users, userProfile?._id)) {
                unFollowUserHandler(
                  userProfile?._id,
                  authState?.token,
                  dataDispatch
                );
                toast.success(`Unfollowed ${userProfile?.username}`);
              } else {
                followUserHandler(
                  userProfile?._id,
                  authState?.token,
                  dataDispatch
                );
                toast.success(`following ${userProfile?.username}`);
              }
            }}
          >
            {userFollowed(dataState?.users, userProfile?._id)
              ? "UnFollow"
              : "Follow"}
          </Button>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-semibold">
          {userProfile?.firstName} {userProfile?.lastName}
        </p>

        <p>@{userProfile?.username}</p>

        {userProfile?.bio ? (
          <p>
            <strong>Bio: </strong>
            {userProfile?.bio}
          </p>
        ) : (
          ""
        )}
        {userProfile?.website ? (
          <a
            style={{
              wordBreak: "break-all",
              color: "var(--primary-color)",
            }}
            href={userProfile?.website}
            target="_blank"
            rel="noreferrer"
          >
            {userProfile?.website}
          </a>
        ) : (
          ""
        )}

        <p>Joined {moment(userProfile?.createdAt)?.format("LL")}</p>
      </div>

      <div className="flex gap-4 justify-between my-2">
        <p>
          <strong>{userPosts?.length} </strong>
          Posts
        </p>
        <p>
          <strong>{userProfile?.following?.length} </strong>
          following
        </p>
        <p>
          <strong>{userProfile?.followers?.length} </strong>
          followers
        </p>
      </div>
      {/* <a href="zabihhaqqani@netlify.app">zabihhaqqani@netlify.app</a> */}
    </div>
  );
};

export default UserProfileCard;
