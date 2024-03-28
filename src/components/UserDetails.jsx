import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { useDataContext } from "../context/dataContext";
import { getUserPosts } from "../utils/getUserPosts";

const UserDetails = ({ user }) => {
  const { dataState } = useDataContext();

  const metrics = dataState?.users?.find(
    (people) => people.username === user?.username
  );

  const userPosts = getUserPosts(dataState?.posts, user);
  return (
    <div className="hidden flex-col my-5 px-2 items-center lg:flex">
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
