import { useParams } from "react-router-dom";
import { useDataContext } from "../context/dataContext";
import Navbar from "./Navbar";
import LeftSideBar from "./LeftSideBar";
import PostCard from "./productCard/PostCard";
import RightSideBar from "./RightSideBar";

const IndividualPostPage = () => {
  const { dataState } = useDataContext();

  let { id } = useParams();
  const filteredPosts = dataState?.posts?.filter((post) => post._id === id);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-[50px]">
        <LeftSideBar className="h-[95vh] w-[500px]" />
        <div className="flex flex-col items-center gap-4">
          {filteredPosts?.map((post) => {
            return <PostCard key={post._id} post={post} showComments={true} />;
          })}

          {/* <Comments comments={comments}/> */}
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};
export default IndividualPostPage;
