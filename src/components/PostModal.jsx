import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

import { useAuthContext } from "../context/authContext";
import { useDataContext } from "../context/dataContext";
import { createPostHandler } from "../utils/createPostHandler";
import AvatarIcon from "./AvatarIcon";
import { Button } from "./ui/button";

const PostModal = ({ title }) => {
  const { authState } = useAuthContext();
  const { dataDispatch, dataState } = useDataContext();
  const [postContent, setPostContent] = useState("");
  const navigate = useNavigate();

  const postBtnHandler = async () => {
    try {
      // const response = await media()
      setPostContent("");
      createPostHandler(authState?.token, dataDispatch, {
        content: postContent,
      });
      toast.success("New Post added!");
    } catch (error) {
      console.error(error);
    }
  };

  const userData = dataState?.users?.find(
    (user) => user?.username === authState?.user?.username
  );
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="m-2">
          {title || <i className="fas fa-plus-circle"></i>}{" "}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription>
            <AvatarIcon
              username={userData?.username}
              avatar={userData?.avatar}
            />
            <textarea
              onChange={(e) => setPostContent(e.target.value)}
              className="border resize-none w-full my-3 rounded-sm p-4"
              placeholder="What is happening?"
              value={postContent}
              name=""
              id=""
              cols="40"
              rows="8"
            ></textarea>{" "}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => postBtnHandler()}
            disabled={postContent === "" ? true : false}
            type="submit"
          >
            Super Post
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PostModal;
