import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SuggestedUser from "./SuggestedUser";
import { useDataContext } from "../context/dataContext";
import { useAuthContext } from "../context/authContext";
import { ScrollArea } from "./ui/scroll-area";

function RightSideBar() {
  const { dataState, dataDispatch } = useDataContext();
  const { authState } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState("");

  const { username } = useParams();

  const user = dataState?.users?.find(
    (user) => user?.username === authState?.user?.username
  );
  const navigate = useNavigate();
  const suggestedUsers = dataState?.users
    ?.filter((users) => users.username !== user?.username)
    ?.filter((prevUser) =>
      user?.following?.filter((user) => user.username !== prevUser.username)
    );

  const filteredSearch = dataState?.users?.filter(({ username }) =>
    username?.includes(searchTerm?.toLowerCase())
  );

  const handleClearClick = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    handleClearClick();
  }, [username]);
  return (
    <div className="flex-col rounded-sm h-fit items-center gap-2  lg:flex  hidden transition-all">
      <h3 className="font-bold text-lg">Suggested Users</h3>
      <div className="flex flex-col">
        <ScrollArea className="lg:h-[500px]  rounded-md">
          {suggestedUsers?.map((user) => {
            return <SuggestedUser key={user?._id} user={user} />;
          })}
        </ScrollArea>
      </div>
    </div>
  );
}

export default RightSideBar;
