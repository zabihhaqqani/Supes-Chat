import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import batIcon from "../assets/icons8-bat.gif";

const HeroList = ({ loginAsGuest, showList, setShowList }) => {
  return (
    <div className="absolute bg-white p-5 h-[450px] w-[400px]">
      <ScrollArea className="h-[300px] w-[350px] rounded-md p-4 top-0">
        <div className="flex flex-col gap-4">
          <Button
            variant="outline"
            onClick={() =>
              loginAsGuest({ username: "flash", password: "speedster" })
            }
          >
            Login as Flash
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              loginAsGuest({ username: "greenarrow", password: "arrow123" })
            }
          >
            Login as Green Arrow
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              loginAsGuest({ username: "batman", password: "iambatman" })
            }
          >
            Login as Batman <img src={batIcon} alt="" className="h-[20px]" />
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              loginAsGuest({ username: "superman", password: "manofsteel" })
            }
          >
            Login as Superman
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              loginAsGuest({ username: "batman", password: "iambatman" })
            }
          >
            Sign up as a new hero
          </Button>
          <Button variant="outline" onClick={() => setShowList(!showList)}>
            X
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
};

export default HeroList;
