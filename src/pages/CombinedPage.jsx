import { useEffect, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import Navbar from "../components/Navbar";
import RightSideBar from "../components/RightSideBar";
import PostCard from "../components/productCard/PostCard";
import { ScrollArea } from "../components/ui/scroll-area";
import { useAuthContext } from "../context/authContext";
import { useDataContext } from "../context/dataContext";

const CombinedPage = ({ pageType }) => {
  const { dataState } = useDataContext();
  const [posts, setPosts] = useState([]);
  const { authState } = useAuthContext();

  const bookmarkedPosts = (id) =>
    dataState?.posts?.filter((post) => post?._id === id)[0];

  useEffect(() => {
    if (pageType === "likedPosts") {
      setPosts(
        dataState?.posts?.filter((post) =>
          post.likes.likedBy.find(
            (currUser) => currUser.username === authState?.user?.username
          )
        )
      );
    } else if (pageType === "explore") {
      setPosts(dataState?.posts);
    } else if (pageType === "bookmarks") {
    }
  }, [dataState, pageType]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-[50px] ">
        <LeftSideBar />
        <ScrollArea className="lg:h-[95vh] rounded-md lg:w-[500px]">
          <div>
            {posts?.length > 0 || dataState.bookmarks.length > 0 ? (
              <div className="flex flex-col items-center gap-4">
                {pageType !== "bookmarks" ? (
                  <>
                    {posts?.map((post) => {
                      return <PostCard key={post._id} post={post} />;
                    })}
                  </>
                ) : (
                  <>
                    {dataState?.bookmarks?.map((post) => {
                      return (
                        <PostCard
                          key={post?._id}
                          post={bookmarkedPosts(post?._id)}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            ) : (
              <h3 className="text-center m-3">
                {pageType === "likedPosts"
                  ? "No Liked Posts Yet!"
                  : pageType === "explore"
                  ? "No Posts to Explore!"
                  : "No Bookmarks Yet!"}
              </h3>
            )}
          </div>
        </ScrollArea>
        <RightSideBar />
      </div>
    </div>
  );
};

export default CombinedPage;
