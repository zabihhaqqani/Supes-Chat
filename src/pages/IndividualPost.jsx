import { useParams } from "react-router-dom";
import PostCard from "../components/productCard/PostCard";
import { useDataContext } from "../context/dataContext";

const IndividualPost = () => {
  const { dataState } = useDataContext();

  let { id } = useParams();

  const filteredPosts = dataState?.posts?.filter((post) => post._id === id);
  console.log(filteredPosts);
  return (
    <div>
      {filteredPosts?.map((post) => {
        return <PostCard key={post._id} post={post} showComments={true} />;
      })}
    </div>
  );
};
export default IndividualPost;
