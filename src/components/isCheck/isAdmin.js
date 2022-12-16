import React from "react";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

function CheckAdmin({ children }) {
  const {
    authState: { isAuthenticated, user },
  } = useContext(AuthContext);
  let body = null;

  if (isAuthenticated && user.rule === "admin") body = <>{children}</>;
  return <div>{body}</div>;
}

export default CheckAdmin;
