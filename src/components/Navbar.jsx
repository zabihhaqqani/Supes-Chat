import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { useDataContext } from "../context/dataContext";
import { ModeToggle } from "./ui/mode-toggle";
import Logo from "../assets/favicon2.png";
import Search from "./Search";

const Navbar = () => {
  const { authState } = useAuthContext();
  const { dataState } = useDataContext();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center p-2 items-center shadow-md mb-2 ">
      <div className="w-[1000px] flex justify-between items-center">
        <div onClick={() => navigate("/")}>
          <img src={Logo} alt="logo" className="h-[60px]" />
        </div>

        <Search />
        <div className="flex gap-3 items-center cursor-pointer">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
