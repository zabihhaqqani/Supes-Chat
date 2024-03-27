import { useState } from "react";
import { toast } from "react-toastify";
import { editUserHandler } from "../utils/editUserHandler";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import AvatarIcon from "./AvatarIcon";
const EditProfileModal = ({
  data,
  token,
  dataDispatch,
  closeModal,
  isOpen,
}) => {
  const [editedProfile, setEditedProfile] = useState({
    bio: data?.bio,
    website: data?.website,
    avatar: data?.avatar,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevData) => ({ ...prevData, [name]: value }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    editUserHandler(token, dataDispatch, editedProfile);
    closeModal();
    toast.success("Profile edited!");
  };
  return (
    <Dialog className="w-[250px] ">
      <DialogTrigger
        onClick={() => closeModal()}
        className="border p-2 w-[60px] rounded-sm"
      >
        Edit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex gap-3 flex-col">
          <AvatarIcon username={data?.username} avatar={data?.avatar} />
          <form onSubmit={formHandler} className="flex flex-col gap-3">
            <label htmlFor="bio">Bio: </label>
            <Input
              required
              onChange={handleInputChange}
              value={editedProfile?.bio}
              name="bio"
              id="bio"
            />
            <label htmlFor="website">Website: </label>
            <Input
              onChange={handleInputChange}
              name="website"
              value={editedProfile?.website}
              type="text"
              id="website"
            />
            <Button type="submit">Update Profile</Button>{" "}
          </form>
        </DialogDescription>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
