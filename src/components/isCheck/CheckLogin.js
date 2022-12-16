import React from "react";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

function CheckLogin({ children }) {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  let body = null;

  if (isAuthenticated) body = <>{children}</>;
  return <div>{body}</div>;
}

export default CheckLogin;
