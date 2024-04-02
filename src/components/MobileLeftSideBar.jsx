import { useAuthContext } from "../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import UserDetails from "./UserDetails";
import PostModal from "./PostModal";

const MobileLeftSideBar = () => {
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

    { path: "/login", icon: "fas fa-sign-out-alt fa-lg", label: "Logout" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden  z-30 ">
      <ul className="flex justify-between  px-0 items-center z-20">
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
              className={`cursor-pointer flex flex-col items-center justify-center w-1/6 ${
                isActive ? "text-blue-500" : "text-gray-500"
              }`}
            >
              <i className={item.icon}></i>
            </li>
          );
        })}
        <PostModal />
      </ul>
    </div>
  );
};

export default MobileLeftSideBar;
