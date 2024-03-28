import { useAuthContext } from "../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import UserDetails from "./UserDetails";
import PostModal from "./PostModal";

const LeftSideBar = () => {
  const {
    userLogout,
    authState: { user },
  } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateAndLogout = (path) => {
    navigate(path);
    userLogout();
  };

  const menuItems = [
    { path: "/", icon: "fas fa-home fa-lg", label: "Home" },
    { path: "/explore", icon: "fa-solid fa-compass fa-lg", label: "Explore" },
    {
      path: "/bookmarks",
      icon: "fa-solid fa-bookmark fa-lg",
      label: "Bookmarks",
    },
    {
      path: "/likedposts",
      icon: "fa-solid fa-heart fa-lg",
      label: "Liked Posts",
    },
    {
      path: `/user/${user?.username}`,
      icon: "fas fa-user fa-lg",
      label: "Profile",
    },
    { path: "/login", icon: "fas fa-sign-out-alt fa-lg", label: "Logout" },
  ];

  return (
    <div className="flex-col hidden md:flex ">
      <ul className="flex flex-col gap-4 px-2 justify-center rounded-sm">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={index}
              onClick={() =>
                item.path === "/login"
                  ? navigateAndLogout(item.path)
                  : navigate(item.path)
              }
              className={`cursor-pointer transition duration-100 ease-in-out p-4 font-[500] w-full ${
                isActive ? "border-r-2 border-gray-400" : ""
              }`}
            >
              <i className={item.icon}></i>
              <span
                className={`pl-2 hidden  lg:inline text-14px lg:w-[16px]${
                  isActive ? "" : ""
                }`}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
      <PostModal title={"Super Post"} />
      <UserDetails user={user} />
    </div>
  );
};

export default LeftSideBar;
