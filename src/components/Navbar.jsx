import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { useDataContext } from "../context/dataContext";
import Search from "./Search";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
  const { authState } = useAuthContext();
  const { dataState } = useDataContext();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center p-2 items-center shadow-md mb-2 ">
      <div className="w-[1000px] flex justify-between">
        <div onClick={() => navigate("/")}>
          <h3 className="text-[22px] font-black">SC</h3>
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
