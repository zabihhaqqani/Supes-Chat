import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import LeftSideBar from "../components/LeftSideBar";
import UserProfileCard from "../components/UserProfileCard";
import PostCard from "../components/productCard/PostCard";
import RightSideBar from "../components/RightSideBar";
import { useDataContext } from "../context/dataContext";
import { ScrollArea } from "../components/ui/scroll-area";

const UserProfilePage = ({ userId }) => {
  const { dataState } = useDataContext();
  let { username } = useParams();
  const user = dataState?.users?.find((user) => user?.username === username);

  const userPosts = dataState?.posts?.filter(
    (user) => user?.username === username
  );

  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-[50px]">
        <LeftSideBar />
        <ScrollArea className="lg:h-[95vh]  rounded-md lg:w-[500px]">
          <div className="flex flex-col items-center">
            <UserProfileCard userProfile={user} />
            <div className="flex flex-col items-center gap-4">
              {userPosts?.map((post) => {
                return (
                  <PostCard key={post?._id} post={post} showComments={false} />
                );
              })}
            </div>
          </div>
        </ScrollArea>
        <RightSideBar />
      </div>
    </div>
  );
};

export default UserProfilePage;
