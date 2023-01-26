import React from "react";
import { Link } from "react-router-dom";
import { NavbarStyle } from "../Styles/style";
function UserNavbar() {
  return (
    <div style={NavbarStyle}>
      <Link to="/">HOME</Link>
      <Link to="/users">USERS</Link>
    </div>
  );
}

export default UserNavbar;
