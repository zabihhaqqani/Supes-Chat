import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const UserDetails = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div
      className="hidden flex-col my-5 px-2 items-center lg:flex cursor-pointer"
      onClick={() => navigate(`/user/${user?.username}`)}
    >
      <Avatar className="w-[100px] h-[100px]">
        <AvatarImage className="object-cover" src={user?.avatar} />
        <AvatarFallback>{user?.username}</AvatarFallback>
      </Avatar>
      <p className="font-bold text-lg">{`${user?.firstName} ${user?.lastName}`}</p>
      <p>@{user?.username}</p>
    </div>
  );
};

export default UserDetails;
