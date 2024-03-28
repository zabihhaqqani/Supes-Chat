import { Fragment } from "react";
import PostCard from "../components/productCard/PostCard";
import { useDataContext } from "../context/dataContext";

const Explore = () => {
  const { dataState } = useDataContext();

  return (
    <div>
      {dataState.posts?.map((post) => {
        return <PostCard key={post?._id} post={post} />;
      })}
    </div>
  );
};

export default Explore;
