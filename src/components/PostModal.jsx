import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { createPostHandler } from "../utils/createPostHandler";
import { useDataContext } from "../context/dataContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AvatarIcon from "./AvatarIcon";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const PostModal = () => {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Power Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {/* <DialogTitle>Post</DialogTitle> */}
          <DialogDescription className=" gap-3">
            <AvatarIcon
              username={userData?.username}
              avatar={userData?.avatar}
            />
            <textarea
              onChange={(e) => setPostContent(e.target.value)}
              className="border resize-none p-2 w-full my-3 rounded-sm"
              placeholder="What is happening?"
              value={postContent}
              name=""
              id=""
              cols="40"
              rows="8"
            ></textarea>{" "}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            onClick={() => postBtnHandler()}
            disabled={postContent === "" ? true : false}
            type="submit"
          >
            Super Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PostModal;
