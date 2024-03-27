import { useState } from "react";
import { editPostHandler } from "../utils/editPostHandler";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

const EditPostModal = ({
  isOpen,
  onClose,
  postContent,
  onSave,
  _id,
  token,
  dataDispatch,
  content,
}) => {
  const [editedContent, setEditedContent] = useState(postContent);

  const handleInputChange = (event) => {
    setEditedContent(event.target.value);
  };

  const handleSave = () => {
    onSave(editedContent);
    onClose();
  };

  const updateBtnHandler = async () => {
    try {
      editPostHandler(_id, token, dataDispatch, {
        content: editedContent,
      });
      toast.success("Post Edited!");
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger
          // onClick={onClose}
          className="border p-2 w-[60px] rounded-sm"
        >
          Edit
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Edit Post</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <textarea
              value={editedContent}
              onChange={handleInputChange}
              placeholder="Write your post here..."
              rows="8"
              cols="20"
              className="resize-none w-full p-2"
            />
          </DialogDescription>
          <DialogFooter>
            <Button
              onClick={() => {
                updateBtnHandler();
                handleSave();
              }}
            >
              Update Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditPostModal;
