import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/dataContext";
import AvatarIcon from "./AvatarIcon";
import { Input } from "./ui/input";

const Search = () => {
  const { dataState } = useDataContext();

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const filteredSearch = dataState?.users?.filter(
    ({ username, firstName, lastName }) =>
      username.toLowerCase()?.includes(searchTerm?.toLowerCase()?.trim()) ||
      firstName.toLowerCase()?.includes(searchTerm?.toLowerCase()?.trim()) ||
      lastName.toLowerCase()?.includes(searchTerm?.toLowerCase()?.trim())
  );

  useEffect(() => {
    setSearchTerm("");
  }, [navigate]);

  return (
    <div className="mr-9">
      <div>
        <Input
          placeholder="Search Hero"
          className="w-[100%] focus:outline-none"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="absolute bg-white text-black rounded-sm  z-[100] w-[204px]">
        {searchTerm &&
          filteredSearch?.map(
            ({ _id, username, firstName, lastName, avatar }) => (
              <div
                key={_id}
                className="flex rounded-sm items-center my-3 p-3 hover:bg-[#e9ebeb] hover:transition-all"
              >
                <AvatarIcon username={username} avatar={avatar} />
                <div className="mx-2 cursor-pointer">
                  <p onClick={() => navigate(`/user/${username}`)}>
                    {firstName} {lastName}
                  </p>
                  <p onClick={() => navigate(`/user/${username}`)}>
                    @{username}
                  </p>
                </div>
              </div>
            )
          )}
        {filteredSearch?.length > 0 ? (
          ""
        ) : (
          <div className="p-3">No Users Found</div>
        )}
      </div>
    </div>
  );
};

export default Search;
