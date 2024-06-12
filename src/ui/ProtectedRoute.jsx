import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const username = useSelector((store) => store.user.username);
  useEffect(
    function () {
      if (!username) navigate("/");
    },
    [username, navigate],
  );

  return children;
}

export default ProtectedRoute;
