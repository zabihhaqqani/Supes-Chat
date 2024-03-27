import React, { useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";
import { useDataContext } from "../context/dataContext";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import AvatarIcon from "./AvatarIcon";

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

  return (
    <div className="text-black">
      <div>
        {/* {searchTerm && <span className="clear-icon" onClick={handleClearClick}>
            &#10006;
          </span>} */}
        <Input
          placeholder="Search Hero"
          className="w-[230px] focus:outline-none"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="absolute bg-white rounded-sm  z-[100] w-[230px]">
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
