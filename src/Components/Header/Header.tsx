import React from "react";
import { Navbar } from "react-bootstrap";

function Header(props :any) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">COVID 19 Tracker - India</Navbar.Brand>
    </Navbar>
  );
}

export default Header;
