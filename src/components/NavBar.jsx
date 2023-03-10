import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="sectuinsnavbar">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        {/* <Navbar.Brand className="ms-3" >
          <Link className="nav-link " to='/'>Faruk</Link>
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" navbar m-auto p-0 m-0">
            <Nav.Link className="nav-link m-1 text-success" href="#/">
              {" "}
              <h3>Home</h3>{" "}
            </Nav.Link>
            <Nav.Link className="nav-link m-1 text-success" href="#about">
              {" "}
              <h3>About</h3>{" "}
            </Nav.Link>
            <Nav.Link className="nav-link m-1 text-success" href="#zertifikat">
              {" "}
              <h3>Zertifikat</h3>{" "}
            </Nav.Link>
            <Nav.Link className="nav-link m-1 text-success" href="#project">
              {" "}
              <h3>Project</h3>{" "}
            </Nav.Link>
            <Nav.Link className="nav-link m-1 text-success" href="#resume">
              {" "}
              <h3> Resume</h3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
