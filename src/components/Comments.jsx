import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/dataContext";
import AvatarIcon from "./AvatarIcon";

const Comments = ({ comments }) => {
  const { dataState } = useDataContext();
  const navigate = useNavigate();
  return (
    <div>
      {comments?.length > 0 ? (
        <div>
          <h3 className="text-center">Comments</h3>
          {comments?.map((data) => {
            const { _id, username, text } = data;
            return (
              <div className="flex gap-1 my-3 border p-3 rounded-lg" key={_id}>
                <div className="mx-2 flex items-center">
                  {dataState?.users?.map((data) =>
                    data?.username === username ? (
                      <AvatarIcon
                        username={data?.username}
                        avatar={data?.avatar}
                      />
                    ) : (
                      ""
                    )
                  )}
                </div>
                <div
                  className="flex flex-col"
                  onClick={() => {
                    navigate(`/user/${username}`);
                  }}
                >
                  <p className="font-semibold">{username}</p>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h3>No Comments Yet!</h3>
        </div>
      )}
    </div>
  );
};

export default Comments;
