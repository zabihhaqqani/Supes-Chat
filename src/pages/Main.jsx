import PostCard from "../components/productCard/PostCard";
import { ScrollArea } from "../components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useAuthContext } from "../context/authContext";
import { useDataContext } from "../context/dataContext";
import { Loader } from "../utils/loader";
import { sortedPosts } from "../utils/sortedPosts";

const MainPage = () => {
  const { dataState, sortBy, setSortBy, showLoader } = useDataContext();
  const { authState } = useAuthContext();

  const userLoggedIn = dataState?.users?.find(
    (user) => user.username === authState?.user?.username
  );

  const followedUserPosts = dataState?.posts?.filter(
    (post) =>
      userLoggedIn?.following?.some(
        (user) => user?.username === post?.username
      ) || authState?.user?.username === post?.username
  );

  const handleSelectChange = (event) => {
    console.log(event.target.value);
  };

  const filteredPosts = sortedPosts(followedUserPosts, sortBy);

  return (
    <div>
      <ScrollArea className="lg:h-[95vh]  rounded-md lg:w-[500px]">
        <div>
          {showLoader && <Loader />}
          <div className="flex items-center justify-around my-2 text-sm">
            <h3 className="w-[200px]">{sortBy} Posts</h3>

            <select
              className="px-3 py-2 border text-black rounded-lg"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              name=""
              id=""
            >
              <option value="Trending">🔥 Trending</option>
              <option value="Latest">▲ Latest</option>
              <option value="Oldest">▼ Oldest</option>
            </select>
          </div>
          <div className="flex flex-col items-center gap-4">
            {filteredPosts?.map((post) => {
              return (
                <PostCard key={post._id} post={post} showComments={false} />
              );
            })}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default MainPage;
