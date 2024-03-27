import { useNavigate } from "react-router-dom";
import FollowBtn from "./FollowBtn";
import AvatarIcon from "./AvatarIcon";

const SuggestedUser = ({ user }) => {
  const { username, firstName, lastName, avatar, _id } = user;
  const navigate = useNavigate();
  return (
    <div className="flex  justify-between items-center my-2 p-2 rounded-lg w-full cursor-pointer transition-all hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:flex lg:flex">
      <div className="flex items-center gap-2">
        <AvatarIcon username={username} avatar={avatar} />
        <div className="flex flex-col">
          <p
            onClick={() => navigate(`/user/${username}`)}
            className="font-[400]"
          >
            {firstName} {lastName}
          </p>
          <p
            className="font-[200] text-gray-400"
            onClick={() => navigate(`/user/${username}`)}
          >
            @{username}
          </p>
        </div>
      </div>
      <FollowBtn username={username} _id={_id} />
    </div>
  );
};

export default SuggestedUser;
