import React from "react";
import { useNavigate } from "react-router-dom";
const ToRedirect = ({ nav }) => {
  useEffect(() => {
    navigate(nav);
  }, [navigate, nav]);

  const navigate = useNavigate();

  return <div>ToRedirect</div>;
};

export default ToRedirect;
