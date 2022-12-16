import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { AuthContext } from "../../contexts/AuthContext";
import CheckAdmin from "../isCheck/isAdmin";
import Search from "./Search";

function NavbarMenu() {
  const {
    authState: { user, isAuthenticated },
    logoutUser,
  } = useContext(AuthContext);
  let body = null;
  const mySwal = withReactContent(Swal);

  const logout = () => logoutUser();

  isAuthenticated
    ? (body = (
        <DropdownButton
          id="dropdown-basic-button"
          title={user.username}
          variant="outline-light"
        >
          <Dropdown.Item to="/changePassword" as={Link}>
            Change Password
          </Dropdown.Item>
          <Dropdown.Item to="/changeInfo" as={Link}>
            Change Info
          </Dropdown.Item>
          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
        </DropdownButton>
      ))
    : (body = (
        <Nav>
          <Nav.Link to="/login" as={Link}>
            <Button variant="outline-light">Login</Button>
          </Nav.Link>
          <Nav.Link to="/register" as={Link}>
            <Button variant="outline-light">Sign up</Button>
          </Nav.Link>
        </Nav>
      ));

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{}}
      className="py-3 shadow-Navbar"
    >
      <Container>
        <Navbar.Brand to="/" as={Link}>
          <span style={{ fontWeight: "bolder", fontSize: "28px" }}>Kdemy</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link to="/dashboard" as={Link}>
              Dashboard
            </Nav.Link>
            <Nav.Link to="/myCourses" as={Link}>
              My Course
            </Nav.Link>
            <CheckAdmin>
              <NavDropdown title="Admin Manager" id="collasible-nav-dropdown">
                <NavDropdown.Item to="/add" as={Link}>
                  Add Course
                </NavDropdown.Item>
                <NavDropdown.Item to="/courses" as={Link}>
                  Course Manager
                </NavDropdown.Item>
                <NavDropdown.Item to="/member" as={Link}>
                  Member Manager
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/addfiles">
                  ADD FILES TEST
                </NavDropdown.Item>
              </NavDropdown>
            </CheckAdmin>
          </Nav>
          <Search></Search>
          {body}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
