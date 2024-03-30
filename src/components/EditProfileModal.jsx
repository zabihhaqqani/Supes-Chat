import { useState } from "react";
import { toast } from "react-toastify";
import { editUserHandler } from "../utils/editUserHandler";
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

  const formHandler = () => {
    editUserHandler(token, dataDispatch, editedProfile);
    closeModal();
    toast.success("Profile edited!");
  };
  return (
    <AlertDialog className="w-[250px]">
      <AlertDialogTrigger>
        <Button
          onClick={() => closeModal()}
          className="border p-2 w-[150px] rounded-md"
        >
          Edit Profile
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Profile</AlertDialogTitle>
          <AlertDialogDescription className="sm:max-w-[425px] flex flex-col gap-3">
            <AvatarIcon username={data?.username} avatar={data?.avatar} />
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
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => formHandler()} type="submit">
            Update Profile
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    // <Dialog className="w-[250px] ">
    //   <DialogTrigger
    //     onClick={() => closeModal()}
    //     className="border p-2 w-[60px] rounded-sm"
    //   >
    //     Edit
    //   </DialogTrigger>
    //   <DialogContent>
    //     <DialogHeader>
    //       <DialogTitle>Edit Profile</DialogTitle>
    //     </DialogHeader>
    //     <DialogDescription className="flex gap-3 flex-col">
    //       <AvatarIcon username={data?.username} avatar={data?.avatar} />
    //       <form onSubmit={formHandler} className="flex flex-col gap-3">
    //         <label htmlFor="bio">Bio: </label>
    //         <Input
    //           required
    //           onChange={handleInputChange}
    //           value={editedProfile?.bio}
    //           name="bio"
    //           id="bio"
    //         />
    //         <label htmlFor="website">Website: </label>
    //         <Input
    //           onChange={handleInputChange}
    //           name="website"
    //           value={editedProfile?.website}
    //           type="text"
    //           id="website"
    //         />
    //         <Button type="submit">Update Profile</Button>{" "}
    //       </form>
    //     </DialogDescription>
    //   </DialogContent>
    // </Dialog>
  );
};

export default EditProfileModal;
