import React from "react";
import userFollowed from "../utils/userFollowed";
import unFollowUserHandler from "../utils/unFollowUserHandler";
import followUserHandler from "../utils/followUserHandler";
import { useAuthContext } from "../context/authContext";
import { useDataContext } from "../context/dataContext";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const FollowBtn = ({ username, _id }) => {
  const { authState } = useAuthContext();
  const { dataState, dataDispatch } = useDataContext();

  const navigate = useNavigate();
  return (
    <Button
      className="w-[100px] m-3"
      onClick={() => {
        if (authState?.token) {
          if (userFollowed(dataState?.users, _id)) {
            unFollowUserHandler(_id, authState?.token, dataDispatch);
            toast.success(`Unfollowed ${username}`);
          } else {
            followUserHandler(_id, authState?.token, dataDispatch);
            toast.success(`Following ${username}`);
          }
        } else {
          toast.error("Please login to follow");
          navigate("/login");
        }
      }}
    >
      {userFollowed(dataState?.users, _id) ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default FollowBtn;
