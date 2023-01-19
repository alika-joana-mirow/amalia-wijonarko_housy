import React from "react";
import logo from "../../logo.svg";
import cssModules from "./navbar.module.css";

import { Navbar, Nav, InputGroup, Form } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar className={cssModules.navBar}>
      <Navbar.Brand href="#">
        <img src={logo} alt="logo"  className={cssModules.icon} />
      </Navbar.Brand>

      <Nav>
        <InputGroup>
          <Form.Control
            placeholder="Tangerang Selatan"
            aria-label="Search Box"
            className={cssModules.searchBar}
            // aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Nav.Link href="#signIn" className={cssModules.signIn}>
          Sign In
        </Nav.Link>
        <Nav.Link href="#signUp" className={cssModules.signUp}>
          Sign Up
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
