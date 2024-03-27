import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center m-1 text-lg">
      <h1 className="font-semibold">Error page not found</h1>
      <h2 onClick={() => navigate("/")}>Go Home ▶ </h2>
    </div>
  );
};
