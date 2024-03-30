import { useDataContext } from "../context/dataContext";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

const HeroList = ({ loginAsGuest, showList, setShowList }) => {
  const { dataState } = useDataContext();
  return (
    <div className="absolute bg-white p-5 h-[] w-[90%]  md:w-[450px] rounded-md z-50">
      <Button
        onClick={() => setShowList(!showList)}
        className="absolute right-5 top-0 m-3 z-50"
        variant="outline"
      >
        X
      </Button>
      <ScrollArea className="h-[350px] rounded-md p-4 top-0 ">
        <div className="flex flex-col gap-4 pt-5">
          {dataState.users?.map((user) => (
            <Button
              variant="outline"
              key={user._id}
              onClick={() =>
                loginAsGuest({
                  username: user?.username,
                  password: user?.password,
                })
              }
            >
              Login as {user?.username}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default HeroList;
