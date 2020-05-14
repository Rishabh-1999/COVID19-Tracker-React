import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../Images/logo.png";

function Header(props: any) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <img src={logo} style={{ width: "300px", height: "90px" }} />
        </Navbar.Brand>
      </Navbar>
      <div>{props.lastupdated}</div>
    </>
  );
}

export default Header;
