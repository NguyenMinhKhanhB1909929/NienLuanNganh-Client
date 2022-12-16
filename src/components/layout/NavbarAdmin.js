import React from "react";
import { Link } from "react-router-dom";

function NavbarAdmin({ isActive }) {
  return (
    <div
      id="list-example"
      className="list-group w-100 shadow-Navbar"
      style={{ marginTop: "130px" }}
    >
      <Link
        className={`${
          isActive == "add" ? "onActive" : ""
        } list-group-item list-group-item-action onHover`}
        to="/add"
      >
        Add Course
      </Link>
      <Link
        className={`${
          isActive == "courses" ? "onActive" : ""
        } list-group-item list-group-item-action onHover`}
        to="/courses"
      >
        Manager Course
      </Link>
      <Link
        className={`${
          isActive == "member" ? "onActive" : ""
        } list-group-item list-group-item-action onHover`}
        to="/member"
      >
        Manager Member
      </Link>
    </div>
  );
}

export default NavbarAdmin;
