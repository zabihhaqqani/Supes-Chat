import { useParams } from "react-router-dom";
import UserProfileCard from "../components/UserProfileCard";
import PostCard from "../components/productCard/PostCard";
import { useDataContext } from "../context/dataContext";

const UserProfilePage = () => {
  const { dataState } = useDataContext();

  let { username } = useParams();

  const user = dataState?.users?.find((user) => user?.username === username);

  const userPosts = dataState?.posts?.filter(
    (user) => user?.username === username
  );

  return (
    <div>
      <UserProfileCard userProfile={user} />
      <div>
        {userPosts?.map((post) => {
          return <PostCard key={post?._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default UserProfilePage;
