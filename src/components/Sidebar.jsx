import React from "react";
import { Navbar, Nav, Button, Form, FormControl, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [localQuery, setLocalQuery] = useState("");

  const handleSearch = () => {
    if (localQuery.trim()) {
      dispatch(setSearchQuery(localQuery));
      navigate(`/results?q=${localQuery}`);
    }
  };
  return (
    <Navbar expand="md" className="navbar fixed-left flex-column vh-100 justify-content-between" id="sidebar">
      <Container fluid className="h-100">
        <div className="h-100 d-flex flex-column justify-content-between">
          <div className="w-100">
            <Navbar.Brand as={Link} to="/" className="nav-logo">
              <img src={logo} alt="Spotify Logo" className="my-4" width="130" height="40" />
            </Navbar.Brand>

            <Nav className="flex-column w-100">
              <Nav.Link as={Link} to="/" className="d-flex align-items-center py-3 nav-link">
                <HouseDoorFill className="me-2 icons" />
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="d-flex align-items-center py-3 nav-link">
                <BookFill className="me-2 icons" />
                Your Library
              </Nav.Link>

              <div className="input-group mt-3">
                <FormControl
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  className="form-control"
                  value={localQuery}
                  onChange={(e) => setLocalQuery(e.target.value)}
                />
                <div className="input-group-append">
                  <Button onClick={handleSearch} variant="outline-secondary" size="sm" className="h-100">
                    GO
                  </Button>
                </div>
              </div>
            </Nav>
          </div>

          <div className="nav-btn w-100 mt-auto d-flex flex-column align-items-center">
            <Button type="button" className="btn signup-btn">
              Sign Up
            </Button>
            <Button type="button" className="btn login-btn">
              Login
            </Button>
            <div className="nav-btn-link">
              <Link to="#">Cookie Policy</Link>|
              <Link to="#" className="nav-btn-link">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
