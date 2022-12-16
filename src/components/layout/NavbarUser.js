import React from "react";
import { Link } from "react-router-dom";

function NavbarUser({ isRoute }) {
  console.log(isRoute);
  return (
    <div
      id="list-example"
      class="list-group w-100 shadow-Navbar"
      style={{ marginTop: "130px" }}
    >
      <Link
        class={`${
          isRoute == "changePassword" ? "onActive" : ""
        } onHover list-group-item list-group-item-action`}
        to="/changePassword"
      >
        Change Password
      </Link>
      <Link
        class={`${
          isRoute == "changeInfo" ? "onActive" : ""
        } onHover list-group-item list-group-item-action`}
        to="/changeInfo"
      >
        Change Info
      </Link>
    </div>
  );
}

export default NavbarUser;
