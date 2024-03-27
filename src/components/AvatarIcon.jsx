import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const AvatarIcon = ({ username, avatar }) => {
  const navigate = useNavigate();
  return (
    <Avatar
      className="w-[50px] h-[50px] object-center border-[3px] border-[#329fcc]"
      onClick={() => {
        navigate(`/user/${username}`);
      }}
    >
      <AvatarImage
        className="object-cover "
        src={
          avatar ??
          "https://fastly.picsum.photos/id/100/150/150.jpg?hmac=uGUauJoHAFEamhXY6HLrXsmhPdapec4KAi8TqFasrQo"
        }
      />
      {/* <AvatarFallback>{}</AvatarFallback> */}
    </Avatar>
  );
};

export default AvatarIcon;
