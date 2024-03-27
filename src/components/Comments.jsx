import { useDataContext } from "../context/dataContext";
import AvatarIcon from "./AvatarIcon";

const Comments = ({ comments }) => {
  const { dataState } = useDataContext();

  return (
    <div>
      {comments?.length > 0 ? (
        <div>
          <h3 style={{ textAlign: "center" }}>Comments</h3>
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
                <div className="flex flex-col">
                  <p>
                    <strong>{username}</strong>
                  </p>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="comments-container">
          <h3>No Comments Yet!</h3>
        </div>
      )}
    </div>
  );
};

export default Comments;
