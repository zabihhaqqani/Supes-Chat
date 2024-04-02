import { Outlet, useLocation } from "react-router-dom";
import LeftSideBar from "src/components/LeftSideBar";
import MobileLeftSideBar from "../components/MobileLeftSideBar";
import Navbar from "../components/Navbar";
import RightSideBar from "../components/RightSideBar";

import PostCard from "../components/productCard/PostCard";
import { useAuthContext } from "../context/authContext";
import { useDataContext } from "../context/dataContext";
import { sortedPosts } from "../utils/sortedPosts";
import { ScrollArea } from "../components/ui/scroll-area";

function Home() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const { dataState, sortBy, setSortBy, showLoader, dataDispatch } =
    useDataContext();
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
      <Navbar />
      <div className="flex justify-center gap-[70px]">
        <LeftSideBar
          onClick={() => dataDispatch({ type: "SHOW_OPTIONS", payload: false })}
        />

        <section className="mt-[6px]">
          <ScrollArea className="lg:h-[90vh]  rounded-md lg:w-[500px] md:w-[500px] md:h-[90vh] w-full lg:mb-0 md:mb-0 mb-[55px]">
            {isHomePage && (
              <div className="flex items-center justify-around my-2 text-sm px-0">
                <h3 className="">{sortBy} Posts</h3>

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
            )}

            <div className="flex flex-col items-center">
              <Outlet />
              {isHomePage && (
                <div>
                  {filteredPosts?.length > 0 ? (
                    <>
                      {" "}
                      {filteredPosts?.map((post) => {
                        return <PostCard key={post._id} post={post} />;
                      })}
                    </>
                  ) : (
                    <h3 className="text-center">No Posts Yet!</h3>
                  )}
                </div>
              )}
            </div>
          </ScrollArea>
        </section>
        <RightSideBar />
      </div>
      <MobileLeftSideBar />
    </div>
  );
}

export default Home;
